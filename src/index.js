import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { startDatabase } from './database/mongdb.js';
import { insertAd, getAds } from './database/ads.js';

const app = express();

app.disable('x-powered-by')

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', async (_, res) => {
    res.send(await getAds());
});

startDatabase().then(async () => {
    await insertAd({"title": "Hello, now from the in-memory database!"});

    app.listen(3001, async () => {
        console.log('Server running on the port 3001');
    });
});