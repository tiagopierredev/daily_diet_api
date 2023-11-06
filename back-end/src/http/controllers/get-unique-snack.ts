import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetUniqueSnackUseCase } from "../../use-cases/factories/make-get-unique-snack-use-case";
import { string, z } from "zod";
import { MealsNotFound } from "../../use-cases/errors/meals-not-found";

export async function getUniqueSnack(request: FastifyRequest, reply: FastifyReply) {
	const schemaParams = z.object({
		id: string(),
	});
	try {
		const getUniqueSnackUseCase = makeGetUniqueSnackUseCase();
		const { id } = schemaParams.parse(request.params);
		const { snack } = await getUniqueSnackUseCase.execute({
			snackId: id,
			userId: request.user.sub,
		});
		return reply.status(200).send({ snack });
	} catch (err) {
		if (err instanceof MealsNotFound) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		throw err;
	}
}
