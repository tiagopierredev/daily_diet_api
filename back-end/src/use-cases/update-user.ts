import { User } from "@prisma/client";
import { UserRepository } from "../repositories/user-repository";
import { hash } from "bcryptjs";
import { UserNotFound } from "./errors/user-not-foud";

interface UpdateUserUseCaseRequest {
	id: string;
	email?: string;
	password?: string;
	name?: string;
}

interface UpdateUserUseCaseResponse {
	user: User;
}

export class UpdateUserUseCase {
	constructor(private useRepository: UserRepository) {}

	async execute({
		id,
		email,
		password,
		name,
	}: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
		let password_hash;
		console.log(password_hash);
		if (password) {
			password_hash = await hash(password, 6);
		}
		console.log(password_hash);

		const userWithSameEmail = await this.useRepository.findById(id);
		if (!userWithSameEmail) {
			throw new UserNotFound();
		}
		const user = await this.useRepository.update(id, {
			email,
			password_hash,
			name,
		});
		return {
			user,
		};
	}
}
