// import { Connection } from "@database/config/connection";
import express from "express";

function bootstrap() {
    const app = express();
    app.use(express.json());
    app.get("/", (req, res) => {
        res.status(200).json({ data: "Hello world." });
    });
    app.get("/page", (req, res) => {
        res.status(200).json({ data: "Page." });
    });
    app.listen(3000);
}

// Connection.initialize()
// .then(() => console.log("initialized."))
// .catch(err => console.log(err));

bootstrap();