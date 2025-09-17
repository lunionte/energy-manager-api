import { NotFoundError } from "../errors/not-found.error";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
    private userRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    async getById(id: string) {
        const user = await this.userRepository.getById(id);
        if (!user) {
            throw new NotFoundError("Usuário não encontrado");
        }
        return user;
    }

    async getAll() {
        const usersData = await this.userRepository.getAll();
        return usersData;
    }
}
