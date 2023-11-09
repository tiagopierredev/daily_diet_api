import { User } from "@prisma/client";
import { UserRepository } from "../repositories/user-repository";
import { UserNotFound } from "./errors/user-not-foud";

interface MeUseCaseRequest {
	id: string;
}

interface MeUseCaseResponse {
	user: {
		name: User["name"];
		email: User["email"];
		id: User["id"];
		photo: User["photo"];
	};
}

export class MeUseCase {
	constructor(private useRepository: UserRepository) {}

	async execute({ id }: MeUseCaseRequest): Promise<MeUseCaseResponse> {
		const user = await this.useRepository.findById(id);

		if (!user) {
			throw new UserNotFound();
		}

		return {
			user: {
				photo: user.photo,
				name: user.name,
				email: user.email,
				id: user.id,
			},
		};
	}
}
