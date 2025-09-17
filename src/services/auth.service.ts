import { UserRepository } from "../repositories/user.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ValidationError } from "../errors/validation.error";
export class AuthService {
    private userRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    async register(email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = await this.userRepository.save(email, hashedPassword);
        const token = jwt.sign({ id: userData.id, role: userData.role }, process.env.JWT_SECRET!, {
            expiresIn: "7d",
        });

        return { userData, token };
    }

    async login(email: string, password: string) {
        const userData = await this.userRepository.getByEmail(email);
        const hashedPassword = userData?.password;
        const validPassword = await bcrypt.compare(password, hashedPassword!);

        if (!validPassword) {
            throw new ValidationError("Senha incorreta");
        }

        const token = jwt.sign(
            { id: userData?.id, role: userData?.role },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d",
            }
        );
        return token;
    }
}
