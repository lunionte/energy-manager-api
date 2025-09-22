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

    async getById(id: string) {
        const data = await prisma.leitura.findUnique({
            where: { id },
        });
        return data;
    }

    async update(readingId: string, medidorId: string, tecnicoId: string, consumoKwh: number) {
        const data = await prisma.leitura.update({
            where: { id: readingId },
            data: {
                medidorId,
                tecnicoAtualizacaoId: tecnicoId,
                consumoKwh,
                dataHoraAtualizacao: new Date(),
            },
        });
        return data;
    }
}
