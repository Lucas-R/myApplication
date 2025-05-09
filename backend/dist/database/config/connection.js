"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const path_1 = require("path");
const typeorm_1 = require("typeorm");
const { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_DATABASE } = process.env;
exports.Connection = new typeorm_1.DataSource({
    type: "mysql",
    host: DATABASE_HOST,
    port: Number(DATABASE_PORT),
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_DATABASE,
    synchronize: false,
    logging: false,
    entities: [(0, path_1.join)(__dirname, "../entity/**/*.{ts,js}")],
    migrations: [(0, path_1.join)(__dirname, "../migration/**/*.{ts,js}")],
    subscribers: [(0, path_1.join)(__dirname, "../subscriber/**/*.{ts,js}")]
});
