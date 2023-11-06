import { SnackRepository } from "../repositories/meals-repository";
import { MealsNotFound } from "./errors/meals-not-found";
import { MealsNotIsFromUser } from "./errors/meals-not-is-from-user";

interface DeleteSnackUseCaseRequest  {
	snackId: string;
	userId: string;
}

type DeleteSnackUseCaseResponse = void

export class DeleteSnackUseCase {
	constructor(private snackRepository: SnackRepository) {}
	
	async execute({snackId, userId}: DeleteSnackUseCaseRequest): Promise<DeleteSnackUseCaseResponse> {
		const snackExists = await this.snackRepository.findById(snackId);
		if(!snackExists) {
			throw new MealsNotFound();
		}
		if(snackExists.userId !== userId) {
			throw new MealsNotIsFromUser();
		}

		return await this.snackRepository.delete(snackId);
	}
}
