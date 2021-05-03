import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import {router} from './router.js';
import { startDatabase } from './database/mongdb.js';

const app = express();

app.disable('x-powered-by')

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(router);

startDatabase().then(async () => {
    app.listen(3001, () => {
        console.log('Server running on the port 3001');
    });
});