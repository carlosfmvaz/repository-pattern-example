import { NextFunction, Request, Response } from "express";
import CreateClient from "../use-cases/create-client";

export default class ClientController {
    constructor(readonly create_client: CreateClient) {
    }

    async createClient(request: Request, response: Response) {
        try {            
            const { name, email, address, phone } = request.body;
            const input = {
                name: name,
                email: email,
                address: address,
                phone: phone,
            };
            await this.create_client.execute(input);
            return response.status(201).send('Client created');
        } catch (error: any) {
            response.status(400).send(error.message);
            return false;
        }
    }
}