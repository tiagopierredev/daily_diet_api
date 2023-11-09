import { Prisma, Snack } from "@prisma/client";
import { SnackRepository } from "../meals-repository";
import { prisma } from "../../lib/prisma";

export class PrismaSnackRepository implements SnackRepository {
	async create(data: Prisma.SnackCreateInput): Promise<Snack> {
		const snack = await prisma.snack.create({
			data,
		});
		return snack;
	}

	async update(id: string, data: Prisma.SnackUncheckedUpdateInput): Promise<Snack> {
		const snack = await prisma.snack.update({
			where: {
				id,
			},
			data,
		});
		return snack;
	}

	async findById(id: string): Promise<Snack | null> {
		const snack = await prisma.snack.findUnique({
			where: {
				id,
			},
		});
		return snack;
	}

	async delete(id: string): Promise<void> {
		await prisma.snack.delete({
			where: {
				id,
			},
		});
	}

	async findByUserId(userId: string): Promise<Snack[]> {
		const snacks = await prisma.snack.findMany({
			where: {
				userId,
			},
			orderBy: {
				date: "desc"
			}
		});
		return snacks;
	}

	async countByUserId(userId: string): Promise<number> {
		const count = await prisma.snack.count({
			where: {
				userId,
			},
		});
		return count;
	}

	async countByUserIdIsDiet(userId: string): Promise<number> {
		const count = await prisma.snack.count({
			where: {
				userId,
				is_diet: true,
			},
		});
		return count;
	}
}
