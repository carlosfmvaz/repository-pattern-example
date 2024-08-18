import IClientRepository from "../db/repositories/client-repository";
import Client from "../entities/client";

type Input = {
    name: string;
    email: string;
    address: string;
    phone: string;
}

export default class CreateClient {
    constructor(readonly client_repository: IClientRepository) {
    }

    async execute(input: Input): Promise<boolean> {
        const client = new Client(null, input.name, input.email, input.address, input.phone);  
        await this.client_repository.save(client);
        return true;
    }
}