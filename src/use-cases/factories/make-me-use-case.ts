import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { MeUseCase } from "../me-use-case";

export function makeMeUseCase() {
	const usersRepository = new PrismaUserRepository();
	const makeMeUseCase = new MeUseCase(usersRepository);
	return makeMeUseCase;
}
