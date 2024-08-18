import express from 'express';
import cors from 'cors';
import ClientController from './controllers/client-controller';
import CreateClient from './use-cases/create-client';
import ClientRepositoryMemory from './db/repositories/client-repository-memory';

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const client_repository = new ClientRepositoryMemory();
const create_client = new CreateClient(client_repository);
const client_controller = new ClientController(create_client);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/create-user', async (req, res) => await client_controller.createClient(req, res));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
