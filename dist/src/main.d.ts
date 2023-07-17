import { IMessage } from "./formatter/interface";
interface Parameters {
    sql: string;
    host?: string;
    user?: string;
    port?: number;
    driver?: string;
    prefix?: string;
    password?: string;
    database?: string;
    verbosity?: number;
}
declare const _default: ({ sql, host, port, user, prefix, password, database, verbosity, driver, }: Parameters) => Promise<IMessage[]>;
export default _default;
