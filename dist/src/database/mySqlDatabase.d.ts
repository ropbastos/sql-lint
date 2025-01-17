import IDatabase, { sqlError } from "./interface";
export default class MySqlDatabase implements IDatabase {
    private connection;
    constructor(host: string, user: string, password: string, database: string, port?: number);
    lintQuery(query: string): Promise<sqlError | null>;
    end(): void;
}
