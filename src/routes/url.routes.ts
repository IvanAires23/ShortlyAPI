import { Router } from "express";
import { validationBody } from "../middlewares/validationSchemas.middleware";
import { urlSchema } from "../schema/url.schema";
import urlController from "../controllers/url.controller";
import { authValidation } from "../middlewares/authValidation.middleware";

const urlRouter = Router()

urlRouter
    .all('/*', authValidation)
    .post('/shorten', validationBody(urlSchema), urlController.createUrl)

export default urlRouter