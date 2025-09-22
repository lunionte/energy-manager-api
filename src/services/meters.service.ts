import { MeterRepository } from "../repositories/meters.repository";

export class MetersService {
    private meterRepository;
    constructor() {
        this.meterRepository = new MeterRepository();
    }
    async create(serial: string, location: string, status: string) {
        const meterData = await this.meterRepository.createMeter(serial, location, status);
        return meterData;
    }
    async update(meterId: string, serial: string, location: string, status: string) {
        const meter = await this.meterRepository.getById(meterId);
        if (!meter) {
            throw new Error("Medidor não encontrado");
        }

        const updatedReading = await this.meterRepository.update(meterId, serial, location, status);
        return updatedReading;
    }
}
