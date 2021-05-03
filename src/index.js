import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import {router} from './router.js';
import { startDatabase } from './database/mongdb.js';
import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === "dev" ? ".env.test" : ".env"
});

const app = express();

const environment = process.env.NODE_ENV;
const port = process.env.PORT;

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(router);

startDatabase().then(async () => {
    app.listen(port, () => {
        console.log(`Server running in ${environment} on the port ${port}`);
    });
});