import { PrismaSnackRepository } from "../../repositories/prisma/prisma-snack-repository";
import { GetSnackUniqueUseCase } from "../get-unique-snack";

export function makeGetUniqueSnackUseCase() {
	const snackRepository = new PrismaSnackRepository();
	const getUniqueSnackUseCase = new GetSnackUniqueUseCase(snackRepository);
	return getUniqueSnackUseCase;
}
