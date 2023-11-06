import { Snack } from "@prisma/client";
import { SnackRepository } from "../repositories/meals-repository";

interface GetSnackUserListUseCaseRequest {
	userId: string;
}

interface  GetSnackUserListUseCaseResponse {
	snacks: Snack[];
	totalSnacks: number;
	totalSnacksIsNotDiet: number,
	totalSnacksIsDiet: number,
	percentage: number,
	bestSequence: number,
}

export class GetSnackUserListUseCase {
	constructor(private snackRepository: SnackRepository) {}
	async execute({ userId }: GetSnackUserListUseCaseRequest): Promise<GetSnackUserListUseCaseResponse> {
		const snacks = await this.snackRepository.findByUserId(userId);
		const totalSnacks = await this.snackRepository.countByUserId(userId);
		const totalSnacksIsDiet = await this.snackRepository.countByUserIdIsDiet(userId);
		const totalSnacksIsNotDiet = totalSnacks - totalSnacksIsDiet;
		const percentage = Math.round(((totalSnacksIsDiet / totalSnacks) * 100) * 100) / 100;

		let count = 0;
		let maxCount = 0;

		for (const snack of snacks) {
			if (snack.is_diet) {
				count++;
				maxCount = Math.max(maxCount, count);
			} else {
				count = 0;
			}
		}

		return {
			snacks,
			totalSnacks,
			totalSnacksIsDiet,
			totalSnacksIsNotDiet,
			percentage,
			bestSequence: maxCount,
		}; 
	}
}
