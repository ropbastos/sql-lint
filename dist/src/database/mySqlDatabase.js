"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql2");
class MySqlDatabase {
    constructor(host, user, password, database, port) {
        this.connection = mysql.createConnection({
            host,
            user,
            password,
            database,
            port,
        });
    }
    lintQuery(query) {
        return new Promise((resolve) => {
            this.connection.query(`EXPLAIN ${query}`, (err) => {
                if (err) {
                    resolve(err);
                    return;
                }
                // resolve with null if there is no error.
                resolve(null);
            });
        });
    }
    end() {
        this.connection.end();
    }
}
exports.default = MySqlDatabase;
//# sourceMappingURL=mySqlDatabase.js.map