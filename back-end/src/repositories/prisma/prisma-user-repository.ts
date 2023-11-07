import { UserRepository } from "../user-repository";
import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

export class PrismaUserRepository implements UserRepository {
	async findByEmail(email: string) {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		return user;
	}

	async create(data: Prisma.UserCreateInput) {
		const user = await prisma.user.create({
			data,
		});

		return user;
	}

	async findById(id: string) {
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
		});

		return user;
	}

	async update(id: string, data: Prisma.UserUncheckedUpdateInput) {
		const user = await prisma.user.update({
			where: {
				id,
			},
			data,
		});

		return user;
	}

	async delete(id: string) {
		await prisma.user.delete({
			where: {
				id,
			},
		});
	}
}
