import { UserRepository } from "../repositories/user-repository";
import { UserNotFound } from "./errors/user-not-foud";

interface DeleteUserUseCaseRequest {
	id: string;
}

type DeleteUserUseCaseResponse = void;

export class DeleteUserUseCase {
	constructor(private useRepository: UserRepository) {}

	async execute({ id }: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
		const user = await this.useRepository.findById(id);
		if (!user) {
			throw new UserNotFound();
		}
		return await this.useRepository.delete(id);
	}
}
