import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UserRepository {
    async save(email: string, hashedPassword: string) {
        const userData = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });
        return userData;
    }

    async getById(id: string) {
        const userData = await prisma.user.findUnique({
            where: {
                id,
            },
        });
        return userData;
    }

    async getByEmail(email: string) {
        const userData = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        return userData;
    }

    async getAll() {
        const usersData = await prisma.user.findMany();
        return usersData;
    }
}
