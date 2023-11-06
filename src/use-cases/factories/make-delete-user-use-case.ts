import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { DeleteUserUseCase } from "../delete-user";

export function makeDeleteUserUseCase() {
	const usersRepository = new PrismaUserRepository();
	const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
	return deleteUserUseCase;
}
