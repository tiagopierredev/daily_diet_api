import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import fastifyCokies from "@fastify/cookie";
import multipart from "@fastify/multipart";
import fastifyCors from "@fastify/cors";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifySwagger from "@fastify/swagger";
import { appRoutes } from "./http/routes";
import { ZodError } from "zod";
import { env } from "./env";

export const app = fastify();
app.register(multipart);
app.register(fastifyJwt, {
	secret: env.JWT_SECRET,
	cookie: {
		cookieName: "refreshToken",
		signed: false,
	},
	sign: {
		expiresIn: "1d",
	},
});
app.register(fastifyCokies);
app.register(fastifySwagger, {
	mode: "static",
	specification: {
		path: "./src/swagger.json",
		postProcessor: function (swaggerObject) {
			return swaggerObject;
		},
		baseDir: "/path/to/external/spec/files/location",
	},
});
app.register(fastifySwaggerUi, {
	routePrefix: "/api-docs",
});
app.register(appRoutes);
app.register(fastifyCors, {
	origin: true,
	credentials: true,
});
app.setErrorHandler((error, _request, reply) => {
	if (error instanceof ZodError) {
		reply.status(400).send({
			message: JSON.parse(error.message)[0].message,
			issues: error.format(),
		});
	}

	if (env.NODE_ENV !== "production") {
		console.error(error);
	} else {
		// TODO: Here we should log to an external tool like DataDog/NewRelic/Sentry
	}

	reply.status(500).send({
		message: "Internal server error",
	});
});
