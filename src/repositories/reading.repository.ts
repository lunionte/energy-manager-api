import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ReadingRepository {
    async create(tecnicoId: string, medidorId: string, valor: number) {
        const data = await prisma.leitura.create({
            data: {
                tecnicoId: tecnicoId,
                dataHora: new Date(),
                consumoKwh: valor,
                medidorId,
            },
        });
        return data;
    }

    async getAll() {
        const data = await prisma.leitura.findMany();
        return data;
    }
}
