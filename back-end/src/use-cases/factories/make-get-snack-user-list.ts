import { PrismaSnackRepository } from "../../repositories/prisma/prisma-snack-repository";
import { GetSnackUserListUseCase } from "../get-snack-user-list";

export function makeGetSnackUserListUseCase() {
	const snackRepository = new PrismaSnackRepository();
	const getSnackUserListUseCase = new GetSnackUserListUseCase(snackRepository);
	return getSnackUserListUseCase;
}