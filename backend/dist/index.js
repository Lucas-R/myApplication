"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./database/config/connection");
const express_1 = __importDefault(require("express"));
function bootstrap() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get("/", (req, res) => {
        res.status(200).json({ data: "Hello world." });
    });
    app.listen(3000);
}
connection_1.Connection.initialize()
    .then(() => console.log("initialized."))
    .catch(err => console.log(err));
bootstrap();
