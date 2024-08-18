import Client from "../../entities/client";

export interface IClientRepository {
    save(client: Client): Promise<void>;
    findByEmail(email: string): Promise<Client | null>;
}