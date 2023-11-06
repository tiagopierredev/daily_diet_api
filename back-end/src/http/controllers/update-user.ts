import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UserAlreadyExists } from "../../use-cases/errors/user-already-exists";
import { makeUpdateUserUseCase } from "../../use-cases/factories/make-update-user-use-case";

export async function updateMe(request: FastifyRequest, reply: FastifyReply) {
	const schemaBody = z.object({
		email: z.string().email("Email is invalid").optional(),
		name: z.string().optional(),
		password: z.string().min(6, "Password must be at least 6 characters").optional(),
	});
	const { email, name, password } = schemaBody.parse(request.body);
	try {
		const updateUserUseCase = makeUpdateUserUseCase();
		await updateUserUseCase.execute({
			id: request.user.sub,
			email,
			name,
			password,
		});
		reply.status(200).send({
			message: "User updated successfully",
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
