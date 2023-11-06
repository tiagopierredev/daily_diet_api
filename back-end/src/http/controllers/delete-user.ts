import { FastifyReply, FastifyRequest } from "fastify";
import { makeDeleteUserUseCase } from "../../use-cases/factories/make-delete-user-use-case";
import { UserNotFound } from "../../use-cases/errors/user-not-foud";

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
	try {
		const deleteUseCase = makeDeleteUserUseCase();
		await deleteUseCase.execute({
			id: request.user.sub,
		});
		return reply.status(200).send({ message: "User deleted successfully" });
	} catch (err) {
		if (err instanceof UserNotFound) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		throw err;
	}
}
