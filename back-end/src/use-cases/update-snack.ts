import { Snack } from "@prisma/client";
import { SnackRepository } from "../repositories/meals-repository";
import { MealsNotFound } from "./errors/meals-not-found";
import { MealsNotIsFromUser } from "./errors/meals-not-is-from-user";

interface UpdateSnackUseCaseRequest  {
	name: string;
	description: string;
	date: Date;
	isDiet: boolean;
	snackId: string;
	userId: string;
}

interface UpdateSnackUseCaseResponse {
	snack: Snack;
}

export class UpdateSnackUseCase {
	constructor(private snackRepository: SnackRepository) {}
	
	async execute({name, description, date, isDiet, snackId, userId}: UpdateSnackUseCaseRequest): Promise<UpdateSnackUseCaseResponse> {
		const snackExists = await this.snackRepository.findById(snackId);
		if(!snackExists) {
			throw new MealsNotFound();
		}
		if(snackExists.userId !== userId) {
			throw new MealsNotIsFromUser();
		}
		const snack = await this.snackRepository.update(snackId, {
			name,
			description,
			date,
			is_diet: isDiet,
		});
		return {
			snack
		};
	}
}
