import { FastifyReply, FastifyRequest } from "fastify";
import { makeMeUseCase } from "../../use-cases/factories/make-me-use-case";
import { InvalidCredentialsError } from "../../use-cases/errors/invalid-credencial-error";

export async function me(request: FastifyRequest, reply: FastifyReply) {
	try {
		const meUseCase = makeMeUseCase();
		const { user } = await meUseCase.execute({ id: request.user.sub });
		return reply.status(200).send({ user });
	} catch (err) {
		if (err instanceof InvalidCredentialsError) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		throw err;
	}
}
