import { Snack } from "@prisma/client";
import { SnackRepository } from "../repositories/meals-repository";
import { MealsNotFound } from "./errors/meals-not-found";
import { MealsNotIsFromUser } from "./errors/meals-not-is-from-user";

interface GetSnackUniqueUseCaseRequest {
	snackId: string;
	userId: string;
}

interface GetSnackUniqueUseCaseResponse {
	snack: Snack;
}

export class GetSnackUniqueUseCase {
	constructor(private snackRepository: SnackRepository) {}

	async execute({ snackId, userId }: GetSnackUniqueUseCaseRequest): Promise<GetSnackUniqueUseCaseResponse> {
		const snack = await this.snackRepository.findById(snackId);
		if (!snack) {
			throw new MealsNotFound();
		}
		if(snack.userId !== userId) {
			throw new MealsNotIsFromUser();
		}
		return {
			snack
		};
	}
}
