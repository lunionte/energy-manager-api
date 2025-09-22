import { NotFoundError } from "../errors/not-found.error";
import { ValidationError } from "../errors/validation.error";
import { MeterRepository } from "../repositories/meters.repository";
import { ReadingRepository } from "../repositories/reading.repository";

export class ReadingService {
    private meterRepository;
    private readingRepository;
    constructor() {
        this.meterRepository = new MeterRepository();
        this.readingRepository = new ReadingRepository();
    }
    async create(tecnicoId: string, medidorId: string, consumoKwh: number) {
        const medidor = await this.meterRepository.getById(medidorId);
        if (!medidor) {
            throw new ValidationError("Medidor não encontrado");
        }
        if (consumoKwh < 0) {
            throw new ValidationError("Consumo não pode ser negativo");
        }

        const reading = await this.readingRepository.create(tecnicoId, medidorId, consumoKwh);
        return reading;
    }

    async update(readingId: string, medidorId: string, tecnicoId: string, consumoKwh: number) {
        const medidor = await this.meterRepository.getById(medidorId);
        if (!medidor) {
            throw new NotFoundError("Medidor não encontrado");
        }

        console.log("Medidor:", medidor);
        const reading = await this.readingRepository.getById(readingId);
        if (!reading) {
            throw new NotFoundError("Leitor não encontrado");
        }

        const updatedReading = await this.readingRepository.update(
            readingId,
            medidorId,
            tecnicoId,
            consumoKwh
        );
        return updatedReading;
    }
}
