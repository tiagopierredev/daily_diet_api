import { FastifyInstance } from "fastify";
import { verifyJwt } from "./middlewares/verify-jwt";
import { swaggerSchema } from "../swagger";
import { token } from "./controllers/token";
import { register } from "./controllers/register";
import { refreshToken } from "./controllers/refresh-token";
import { me } from "./controllers/me";
import { updateMe } from "./controllers/update-user";
import { deleteUser } from "./controllers/delete-user";
import { createSnack } from "./controllers/create-snack";
import { updateSnack } from "./controllers/update-snack";
import { deleteSnack } from "./controllers/delete-snack";
import { getUniqueSnack } from "./controllers/get-unique-snack";
import { dashboard } from "./controllers/dashboard";

export async function appRoutes(app: FastifyInstance) {
	// not authenticated

	// Authentication
	app.post("/token", { schema: swaggerSchema.token }, token);
	app.patch("/refresh/token", { schema: swaggerSchema.refreshToken }, refreshToken);
	app.post("/register", { schema: swaggerSchema.register }, register);

	// authenticated

	// User
	app.get("/me", {onRequest: [verifyJwt], schema: swaggerSchema.me }, me);
	app.put("/me", {onRequest: [verifyJwt], schema: swaggerSchema.updateMe }, updateMe);
	app.delete("/me", {onRequest: [verifyJwt], schema: swaggerSchema.deleteMe }, deleteUser);

	//Snack
	app.post("/meals", {onRequest: [verifyJwt], schema: swaggerSchema.createSnack }, createSnack);
	app.get("/meals/:id", {onRequest: [verifyJwt], schema: swaggerSchema.getUniqueSnack }, getUniqueSnack);
	app.put("/meals/:id", {onRequest: [verifyJwt], schema: swaggerSchema.updateSnack }, updateSnack);
	app.delete("/meals/:id", {onRequest: [verifyJwt], schema: swaggerSchema.deleteSnack }, deleteSnack);

	// Dashboard
	app.get("/dashboard", {onRequest: [verifyJwt], schema: swaggerSchema.dashboard }, dashboard);

}
