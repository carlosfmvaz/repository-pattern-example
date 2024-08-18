import Client from "../../entities/client";
import IClientRepository from "./client-repository";

export default class ClientRepositoryMemory implements IClientRepository {
    private clients: Client[];

    constructor() {
        this.clients = [];
    }

    async save(client: Client): Promise<void> {
        this.clients.push(client);
    }

    async findByEmail(email: string): Promise<Client | null> {
        const client = this.clients.find(client => client.email === email);
        return client ? client : null;
    }
}