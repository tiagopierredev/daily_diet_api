import { FastifyReply, FastifyRequest } from "fastify";
import { makeDeleteUserUseCase } from "../../use-cases/factories/make-delete-user-use-case";
import { InvalidCredentialsError } from "../../use-cases/errors/invalid-credencial-error";

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
	try {
		const deleteUseCase = makeDeleteUserUseCase();
		await deleteUseCase.execute({
			id: request.user.sub,
		});
		return reply.status(204).send({ message: "User deleted successfully" });
	} catch (err) {
		if (err instanceof InvalidCredentialsError) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		throw err;
	}
}
