import { User } from "@prisma/client";
import { InvalidCredentialsError } from "./errors/invalid-credencial-error";
import { UserRepository } from "../repositories/user-repository";
import { compare } from "bcryptjs";

interface TokenUseCaseRequest {
	email: string;
	password: string;
}

interface TokenUseCaseResponse {
	user: User;
}

export class TokenUseCase {
	constructor(private userRepository: UserRepository) {}

	async execute({
		email,
		password,
	}: TokenUseCaseRequest): Promise<TokenUseCaseResponse> {
		const user = await this.userRepository.findByEmail(email);

		if (!user) {
			throw new InvalidCredentialsError();
		}

		const doesPasswordMatches = await compare(password, user.password_hash);

		if (!doesPasswordMatches) {
			throw new InvalidCredentialsError();
		}

		return {
			user,
		};
	}
}
