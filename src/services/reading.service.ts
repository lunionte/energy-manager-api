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

        const reading = await this.readingRepository.create(tecnicoId, medidorId, consumoKwh);
        return reading;
    }
}
