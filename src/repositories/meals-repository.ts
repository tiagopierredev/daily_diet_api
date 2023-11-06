import { Prisma, Snack } from "@prisma/client";

export interface SnackRepository {
	create(data: Prisma.SnackCreateInput): Promise<Snack>;
	update(id: string, data: Prisma.SnackUncheckedUpdateInput): Promise<Snack>;
	findById(id: string): Promise<Snack | null>;
	delete(id: string): Promise<void>;
	findByUserId(userId: string): Promise<Snack[]>;
	countByUserId(userId: string): Promise<number>;
	countByUserIdIsDiet(userId: string): Promise<number>;
}
