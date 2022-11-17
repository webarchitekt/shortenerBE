import express from "express";
import router from './routes/index';
import urlsRouter from './routes/urls';
import { connectToDatabase } from "./services/database.service";
import routerList from "./routes/listing";

class App {
    public server;

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
        connectToDatabase().then(r => r);
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
            res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
            next();
        })
    }

    routes() {
       this.server.use(router);
       this.server.use('/list', routerList);
       this.server.use('/api', urlsRouter);
    }
}

export default new App().server;
