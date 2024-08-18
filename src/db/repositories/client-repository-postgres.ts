import Client from "../../entities/client";
import IClientRepository from "./client-repository";

export default class ClientRepository implements IClientRepository {   
    async save(client: Client): Promise<void> {
        // ORM or SQL query to save client
        throw new Error('Method not implemented.');
    }
    async findByEmail(email: string): Promise<Client | null> {
        // ORM or SQL query to find client by email
        throw new Error('Method not implemented.');
    }
}