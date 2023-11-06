import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { CreateUserUseCase } from "../register";

export function makeRegisterUseCase() {
	const usersRepository = new PrismaUserRepository();
	const createUserUseCase = new CreateUserUseCase(usersRepository);
	return createUserUseCase;
}
