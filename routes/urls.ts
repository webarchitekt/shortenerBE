import express from 'express';
import { nanoid } from 'nanoid';
import Url from '../models/url';
import { validateUrl, generateShortUrl } from '../utils/utils.js';
import { Response, Request } from 'express';
import { connectToDatabase } from "../services/database.service";

const router = express.Router();

router.post('/short', async (req: Request, res: Response) => {
    connectToDatabase().then(r => r);

    const { originalUrl } = req.body;
    const base = 'http://localhost:7000';

    const urlId = nanoid();
    const generateUrl = generateShortUrl(8);
    if ( validateUrl(originalUrl) ) {
        try {
            let url = await Url.findOne({ originalUrl });
            if (url) {
                res.json(url);
            } else {
                const shortUrl = `${base}/${generateUrl}`;

                url = new Url({
                    originalUrl,
                    shortUrl,
                    urlId,
                    generateUrl,
                    date: new Date(),
                });

                await url.save();
                res.json(url);
            }
        } catch (error: any) {
            console.log(error);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(400).json('Invalid Original Url');
    }
});

export default router;
