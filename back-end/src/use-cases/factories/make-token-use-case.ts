import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { TokenUseCase } from "../token";

export function makeTokenUseCase() {
	const usersRepository = new PrismaUserRepository();
	const tokenUseCase = new TokenUseCase(usersRepository);
	return tokenUseCase;
}
