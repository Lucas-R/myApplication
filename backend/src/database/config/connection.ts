import { join } from "path";
import { DataSource } from "typeorm";

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_DATABASE } = process.env;

export const Connection = new DataSource({
    type: "mysql",
    host: DATABASE_HOST,
    port: Number(DATABASE_PORT),
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_DATABASE,
    synchronize: false,
    logging: false,
    entities: [join(__dirname , "../entity/**/*.{ts,js}")],
    migrations: [join(__dirname,  "../migration/**/*.{ts,js}")],
    subscribers: [join(__dirname,  "../subscriber/**/*.{ts,js}")]
});