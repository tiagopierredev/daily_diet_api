import { FastifyReply, FastifyRequest } from "fastify";
import { UserNotFound } from "../../use-cases/errors/user-not-foud";
import { makeCreateSnackUseCase } from "../../use-cases/factories/make-create-snack-use-case";
import { z } from "zod";

export async function createSnack(request: FastifyRequest, reply: FastifyReply) {
	const schemaBody = z.object({
		name: z.string(),
		description: z.string(),
		date: z.string(),
		isDiet: z.boolean(),
	});

	try {
		const createSnackUseCase = makeCreateSnackUseCase();
		const { name, description, date, isDiet } = schemaBody.parse(request.body);
		await createSnackUseCase.execute({
			name, 
			description,
			date: new Date(date),
			isDiet,
			userId: request.user.sub
		});
		return reply.status(200).send({ message: "Snack created successfully" });
	} catch (err) {
		if (err instanceof UserNotFound) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		throw err;
	}
}
