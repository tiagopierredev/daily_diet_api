import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeUpdateSnackUseCase } from "../../use-cases/factories/make-update-snack-use-case";
import { MealsNotFound } from "../../use-cases/errors/meals-not-found";
import { MealsNotIsFromUser } from "../../use-cases/errors/meals-not-is-from-user";

export async function updateSnack(request: FastifyRequest, reply: FastifyReply) {
	const schemaBody = z.object({
		name: z.string(),
		description: z.string(),
		date: z.string(),
		isDiet: z.boolean(),
	});

	const schemaParams = z.object({
		id: z.string(),
	});

	try {
		const updateSnackUseCase = makeUpdateSnackUseCase();
		const { name, description, date, isDiet } = schemaBody.parse(request.body);
		const { id } = schemaParams.parse(request.params);
		await updateSnackUseCase.execute({
			name, 
			description,
			date: new Date(date),
			isDiet,
			userId: request.user.sub,
			snackId: id
		});
		return reply.status(200).send({ message: "Snack updated successfully" });
	} catch (err) {
		if (err instanceof MealsNotFound) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		if (err instanceof MealsNotIsFromUser) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		
		throw err;
	}
}
