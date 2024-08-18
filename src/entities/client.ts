import crypto from 'crypto';

export default class Client {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly address: string;
    readonly phone: string;

    constructor(id: string | null, name: string, email: string, address: string, phone: string) {
        this.id = id ? id : crypto.randomUUID();
        if (name.length < 1) {
            throw new Error('Invalid name');
        }
        if (!email.includes('@') || !email.includes('.')) {
            throw new Error('Invalid email');
        }       
        if (phone.length < 8 || phone.length > 9) {
            throw new Error('Invalid phone');
        }
        this.email = email;        
        this.address = address;
        this.name = name;
        this.phone = phone;
    }
}