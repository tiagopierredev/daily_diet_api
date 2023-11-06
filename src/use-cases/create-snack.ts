import { UserRepository } from "../repositories/user-repository";
import { SnackRepository } from "../repositories/meals-repository";
import { UserNotFound } from "./errors/user-not-foud";
import { Snack } from "@prisma/client";

interface CreateSnackUseCaseRequest  {
	name: string;
	description: string;
	date: Date;
	isDiet: boolean;
	userId: string;
}

interface CreateSnackUseCaseResponse {
	snack: Snack;
}

export class CreateSnackUseCase {
	constructor(private userRepository: UserRepository, private snackRepository: SnackRepository) {}
	
	async execute({name, description, date, isDiet, userId}: CreateSnackUseCaseRequest): Promise<CreateSnackUseCaseResponse> {
		const userExists = await this.userRepository.findById(userId);
		if(!userExists) {
			throw new UserNotFound();
		}
		const snack = await this.snackRepository.create({
			name,
			description,
			date,
			is_diet: isDiet,
			user: {
				connect: {
					id: userId
				}
			}
		});
		return {
			snack
		};
	}
}
