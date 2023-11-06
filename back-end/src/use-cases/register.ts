import { User } from "@prisma/client";
import { UserRepository } from "../repositories/user-repository";
import { hash } from "bcryptjs";
import { UserAlreadyExists } from "./errors/user-already-exists";

interface CreateUserUseCaseRequest {
	email: string;
	password: string;
	name: string;
}

interface CreateUserUseCaseResponse {
	user: User;
}

export class CreateUserUseCase {
	constructor(private useRepository: UserRepository) {}

	async execute({
		email,
		password,
		name,
	}: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
		const password_hash = await hash(password, 6);
		const userWithSameEmail = await this.useRepository.findByEmail(email);
		if (userWithSameEmail) {
			throw new UserAlreadyExists();
		}
		const user = await this.useRepository.create({
			email,
			password_hash,
			name,
		});
		return {
			user,
		};
	}
}
