import express from 'express';
import { insertAd, getAds, updateAd, deleteAd } from './database/ads.controller.js';

const router = express.Router();

router.get('/', getAds);

router.post('/', insertAd);

router.put('/:id', updateAd);

router.delete('/:id', deleteAd);

export {router};
