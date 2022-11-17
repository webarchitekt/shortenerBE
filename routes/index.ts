import express, {Request, Response} from 'express';
import Url from '../models/url';
const router = express.Router()

router.get('/:generateUrl', async (req: Request, res: Response) => {
    try {
        const url = await Url.findOne({ generateUrl: req.params.generateUrl });
        if (url) {
            await Url.updateOne(
                {
                    generateUrl: req.params.generateUrl,
                },
                { $inc: { clicks: 1 } }
            );
            return res.redirect(url.originalUrl);
        } else res.status(404).json('Not found');
    } catch (error: any) {
        console.log(error);
        res.status(500).json('Server Error');
    }
});
export default router;

