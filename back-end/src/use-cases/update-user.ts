import { User } from "@prisma/client";
import { UserRepository } from "../repositories/user-repository";
import { hash } from "bcryptjs";
import { UserNotFound } from "./errors/user-not-foud";

interface UpdateUserUseCaseRequest {
	id: string;
	email?: string;
	password?: string;
	name?: string;
	photo?: string;
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
		photo,	
	}: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
		let password_hash;
	
		if (password) {
			password_hash = await hash(password, 6);
		}
		
		const userWithSameEmail = await this.useRepository.findById(id);
		if (!userWithSameEmail) {
			throw new UserNotFound();
		}
		const user = await this.useRepository.update(id, {
			email,
			password_hash,
			name,
			photo,
		});
		return {
			user,
		};
	}
}
