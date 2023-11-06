import { FastifyReply, FastifyRequest } from "fastify";
import { makeDeleteSnackUseCase } from "../../use-cases/factories/make-delete-snack-use-case";
import { z } from "zod";
import { MealsNotFound } from "../../use-cases/errors/meals-not-found";
import { MealsNotIsFromUser } from "../../use-cases/errors/meals-not-is-from-user";

export async function deleteSnack(request: FastifyRequest, reply: FastifyReply) {
	const schemaParams = z.object({
		id: z.string(),
	});

	try {
		const deleteSnackUseCase = makeDeleteSnackUseCase();
		const { id } = schemaParams.parse(request.params);
		await deleteSnackUseCase.execute({
			userId: request.user.sub,
			snackId: id,
		});
		return reply.status(200).send({ message: "Meal deleted successfully" });
	} catch (err) {
		if (err instanceof MealsNotFound ) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		if (err instanceof MealsNotIsFromUser ) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		throw err;
	}
}
