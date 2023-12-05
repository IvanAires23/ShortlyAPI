import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { db } from "../config/database";

export async function authValidation(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.sendStatus(httpStatus.UNAUTHORIZED)

    try {
        const session = await db.collection('sessions').findOne({ token })
        if (!session) return res.sendStatus(httpStatus.UNAUTHORIZED)

        res.locals.session = session._id

        next()
    } catch (err) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }

}