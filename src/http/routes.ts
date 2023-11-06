import { FastifyInstance } from "fastify";
import { token } from "./controllers/token";
import { register } from "./controllers/register";
import { refreshToken } from "./controllers/refresh-token";
import { swaggerSchema } from "../swagger";
import { me } from "./controllers/me";
import { verifyJwt } from "./middlewares/verify-jwt";
import { updateMe } from "./controllers/update-user";

export async function appRoutes(app: FastifyInstance) {
	// not authenticated
	app.post("/token", { schema: swaggerSchema.token }, token);
	app.patch("/refresh/token", { schema: swaggerSchema.refreshToken }, refreshToken);
	app.post("/register", { schema: swaggerSchema.register }, register);

	// authenticated
	app.get("/me", {onRequest: [verifyJwt], schema: swaggerSchema.me }, me);
	app.put("/me", {onRequest: [verifyJwt], schema: swaggerSchema.updateMe }, updateMe);
	app.delete("/me", {onRequest: [verifyJwt], schema: swaggerSchema.deleteMe }, updateMe);
}
