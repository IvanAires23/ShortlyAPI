import { Request, Response } from "express";
import authService from "../service/auth.service";
import httpStatus from "http-status";

async function create(req: Request, res: Response) {
    try {
        const user = await authService.create(req.body)
        return res.status(httpStatus.CREATED).send(user)
    } catch (err) {
        if (err.name === 'conflict') {
            return res.status(httpStatus.CONFLICT).send(err.message)
        } else if (err.name === 'badRequest') {
            return res.status(httpStatus.BAD_REQUEST).send(err.message)
        } else {
            return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}

async function signIn(req: Request, res: Response) {

    const { email, password } = req.body

    try {
        const token = await authService.signIn(email, password)
        return res.status(httpStatus.OK).send({ token })
    } catch (err) {
        if (err.name === 'unauthorized') return res.status(httpStatus.UNAUTHORIZED).send(err.message)

        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const authController = {
    create,
    signIn
}

export default authController