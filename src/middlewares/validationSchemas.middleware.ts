import { Response, Request, NextFunction } from "express";
import { ObjectSchema } from "joi";
import httpStatus from "http-status";

export function validationBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
    return validation(schema, "body")
}

export function validationParams<T>(schema: ObjectSchema<T>): ValidationMiddleware {
    return validation(schema, "params")
}

function validation(schema: ObjectSchema, type: 'body' | 'params') {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[type], { abortEarly: false })

        if (!error) next();
        else res.status(httpStatus.BAD_REQUEST).send(error.details.map(d => d.message))
    }
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;