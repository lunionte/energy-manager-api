import { MeterRepository } from "../repositories/meters.repository";

export class MetersService {
    private meterRepository;
    constructor() {
        this.meterRepository = new MeterRepository();
    }
    async createMeter(serial: string, location: string, status: string) {
        const meterData = await this.meterRepository.createMeter(serial, location, status);
        return meterData;
    }
}
