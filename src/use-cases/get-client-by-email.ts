import IClientRepository from "../db/repositories/client-repository";

export default class GetClientByEmail {
    constructor(readonly client_repository: IClientRepository) {
    }

    async execute(email: string) {
        const client = await this.client_repository.findByEmail(email);
        if (!client) {
            throw new Error('Client not found');
        }
        return {
            name: client.name,
            email: client.email,
            address: client.address,
            phone: client.phone
        };
    }
}