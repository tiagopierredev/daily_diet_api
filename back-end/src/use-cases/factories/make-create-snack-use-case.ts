import { PrismaSnackRepository } from "../../repositories/prisma/prisma-snack-repository";
import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { CreateSnackUseCase } from "../create-snack";

export function makeCreateSnackUseCase() {
	const usersRepository = new PrismaUserRepository();
	const snacksRepository = new PrismaSnackRepository();
	const createSnackUseCase = new CreateSnackUseCase(usersRepository, snacksRepository);
	return createSnackUseCase;
}
