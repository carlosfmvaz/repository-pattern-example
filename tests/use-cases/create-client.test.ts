import CreateClient from '../../src/use-cases/create-client';
import ClientRepositoryMemory from '../../src/db/repositories/client-repository-memory';

describe('create client test suite', () => {

    it('should create a client', async () => {
        const input = {
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            address: '123 Main St',
            phone: '12345678',
        };
        const client_repository = new ClientRepositoryMemory();
        const create_client = new CreateClient(client_repository);
        await create_client.execute(input);

        const created_client = await client_repository.findByEmail(input.email);
        expect(created_client?.id).toBeDefined();
        expect(created_client?.name).toBe(input.name);
        expect(created_client?.email).toBe(input.email);
    });

    it('should not create a client with invalid email', async () => {
        const input = {
            name: 'John Doe',
            email: 'johndoegmail.com',
            address: '123 Main St',
            phone: '12345678',
        };
        const client_repository = new ClientRepositoryMemory();
        const create_client = new CreateClient(client_repository);
        await expect(create_client.execute(input)).rejects.toThrow('Invalid email');
    });

    it('should not create a client with invalid phone', async () => {
        const input = {
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            address: '123 Main St',
            phone: '11',
        };
        const client_repository = new ClientRepositoryMemory();
        const create_client = new CreateClient(client_repository);
        await expect(create_client.execute(input)).rejects.toThrow('Invalid phone');
    });
});