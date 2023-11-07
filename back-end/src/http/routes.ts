import { FastifyInstance } from "fastify";
import { verifyJwt } from "./middlewares/verify-jwt";
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
import { upload } from "./controllers/upload";

export async function appRoutes(app: FastifyInstance) {
	// not authenticated

	// Authentication
	app.post("/token", token);
	app.patch("/refresh/token", refreshToken);
	app.post("/register", register);

	// authenticated

	// User
	app.get("/me", { onRequest: [verifyJwt] }, me);
	app.put("/me", { onRequest: [verifyJwt] }, updateMe);
	app.delete("/me", { onRequest: [verifyJwt] }, deleteUser);

	//Snack
	app.post("/meals", { onRequest: [verifyJwt] }, createSnack);
	app.get("/meals/:id", { onRequest: [verifyJwt] }, getUniqueSnack);
	app.put("/meals/:id", { onRequest: [verifyJwt] }, updateSnack);
	app.delete("/meals/:id", { onRequest: [verifyJwt] }, deleteSnack);

	// Dashboard
	app.get("/dashboard", { onRequest: [verifyJwt] }, dashboard);

	// Upload
	app.post("/upload", { onRequest: [verifyJwt] }, upload);
}
