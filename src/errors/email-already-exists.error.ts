import { ErrorBase } from "./base.error";

export class EmailAlreadyExists extends ErrorBase {
    constructor(message = "O email já existe") {
        super(409, message);
    }
}
