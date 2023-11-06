import { FastifyReply, FastifyRequest } from "fastify";
import { MealsNotFound } from "../../use-cases/errors/meals-not-found";
import { makeGetSnackUserListUseCase } from "../../use-cases/factories/make-get-snack-user-list";

export async function dashboard(request: FastifyRequest, reply: FastifyReply) {
	try {
		const makeGetSnackUserList = makeGetSnackUserListUseCase();
		const { snacks, totalSnacks, totalSnacksIsDiet, totalSnacksIsNotDiet, percentage, bestSequence } = await makeGetSnackUserList.execute({
			userId: request.user.sub,
		});
		return reply.status(200).send({ snacks, totalSnacks, totalSnacksIsDiet, totalSnacksIsNotDiet, percentage, bestSequence });
	} catch (err) {
		if (err instanceof MealsNotFound) {
			return reply.status(409).send({
				message: err.message,
			});
		}
		throw err;
	}
}
