import { PrismaSnackRepository } from "../../repositories/prisma/prisma-snack-repository";
import { UpdateSnackUseCase } from "../update-snack";

export function makeUpdateSnackUseCase() {
	const snacksRepository = new PrismaSnackRepository();
	const updateSnackUseCase = new UpdateSnackUseCase(snacksRepository);
	return updateSnackUseCase;
}
