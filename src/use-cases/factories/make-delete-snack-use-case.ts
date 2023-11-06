import { PrismaSnackRepository } from "../../repositories/prisma/prisma-snack-repository";
import { DeleteSnackUseCase } from "../delete-snack";

export function makeDeleteSnackUseCase() {
	const snacksRepository = new PrismaSnackRepository();
	const deleteSnackUseCase = new DeleteSnackUseCase(snacksRepository);
	return deleteSnackUseCase;
}
