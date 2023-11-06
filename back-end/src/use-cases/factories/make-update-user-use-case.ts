import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { UpdateUserUseCase } from "../update-user";

export function makeUpdateUserUseCase() {
	const usersRepository = new PrismaUserRepository();
	const createUserUseCase = new UpdateUserUseCase(usersRepository);
	return createUserUseCase;
}
