import express from "express";
import { Response, Request } from 'express';
import Url from "../models/url";

const routerList = express.Router()

routerList.get('/all', async (req: Request, res: Response) => {
    try {
        const url = await Url.find();
        if (url) {
            res.status(200).json(url)
        } else res.status(404).json('Not found');
    } catch (error: any) {
        console.log(error);
        res.status(500).json('Server Error');
    }
});

export default routerList;
