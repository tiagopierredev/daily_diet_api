import { UserRepository } from "../repositories/user-repository";

interface DeleteUserUseCaseRequest {
	id: string;
}

type DeleteUserUseCaseResponse = void;

export class DeleteUserUseCase {
	constructor(private useRepository: UserRepository) {}

	async execute({ id }: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
		return await this.useRepository.delete(id);
	}
}
