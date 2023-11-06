import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeRegisterUseCase } from "../../use-cases/factories/make-register-use-case";
import { UserAlreadyExists } from "../../use-cases/errors/user-already-exists";

export async function register(request: FastifyRequest, reply: FastifyReply) {
	const schemaBody = z.object({
		email: z.string().email("Email is invalid"),
		name: z.string(),
		password: z.string().min(6, "Password must be at least 6 characters"),
	});
	const { email, name, password } = schemaBody.parse(request.body);
	try {
		const createUserUseCase = makeRegisterUseCase();
		await createUserUseCase.execute({
			email,
			name,
			password,
		});
		reply.status(201).send({
			message: "User created successfully",
		});
	} catch (err) {
		if (err instanceof UserAlreadyExists) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		throw err;
	}
}
