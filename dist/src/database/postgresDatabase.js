"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
class PostgresDatabase {
    constructor(host, user, password, database, port) {
        this.pool = new pg_1.Pool({
            host,
            user,
            password,
            database,
            port,
        });
    }
    async lintQuery(query) {
        console.log(this.pool);
        return new Promise((resolve) => {
            this.pool.query(`EXPLAIN ${query}`, (err) => {
                if (err) {
                    resolve({
                        code: err.name,
                        sqlMessage: err.message,
                    });
                    return;
                }
                // resolve with null if there is no error.
                resolve(null);
            });
        });
    }
    end() {
        this.pool.end();
    }
}
exports.default = PostgresDatabase;
//# sourceMappingURL=postgresDatabase.js.map