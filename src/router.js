import express from 'express';
import { insertAd, getAds, updateAd, deleteAd } from './database/ads.js';

const router = express.Router();

router.get('/', async (_, res) => {
    res.send(await getAds());
});

router.post('/', async (req, res) => {
    await insertAd(req.body);
    res.send({message: 'New ad inserted'});
});

router.put('/:id', async (req, res) => {
    const content = req.body;
    const data = await updateAd(req.params.id, content);
    res.send({message: 'Ad updated', ...data});
});

router.delete('/:id', async (req, res) => {
    await deleteAd(req.params.id);
    res.send({message: 'Ad removed'});
});

export {router};
