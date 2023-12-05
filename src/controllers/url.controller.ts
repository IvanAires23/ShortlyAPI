import { Request, Response } from "express";
import urlService from "../service/url.service";
import httpStatus from "http-status";

async function createUrl(req: Request, res: Response) {
    const { url } = req.body
    const userId = res.locals.session

    try {
        const shortUrl = await urlService.createUrl(url, userId)
        res.status(httpStatus.CREATED).send(shortUrl)
    } catch (err) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const urlController = {
    createUrl
}

export default urlController