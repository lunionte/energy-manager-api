import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class MeterRepository {
    async createMeter(serial: string, location: string, status: string) {
        const meterData = await prisma.medidor.create({
            data: {
                serial,
                location,
                status,
            },
        });
        return meterData;
    }
}
