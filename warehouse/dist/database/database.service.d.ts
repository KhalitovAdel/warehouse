import { Connection } from 'typeorm';
export declare class DatabaseService {
    protected readonly connection: Connection;
    constructor(connection: Connection);
    get entities(): {
        name: string;
        tableName: string;
    }[];
    clearDatabase(): Promise<void>;
}
