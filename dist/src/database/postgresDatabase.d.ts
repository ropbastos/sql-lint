import IDatabase, { sqlError } from "./interface";
export default class PostgresDatabase implements IDatabase {
    private pool;
    constructor(host: string, user: string, password: string, database: string, port?: number);
    lintQuery(query: string): Promise<sqlError | null>;
    end(): void;
}
