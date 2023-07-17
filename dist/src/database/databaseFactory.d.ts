import IDatabase from "./interface";
export default function databaseFactory(driver: string, host: string, user: string, password: string, database: string, port?: number): IDatabase;
