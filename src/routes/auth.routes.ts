import { Router } from "express";
import { validationBody } from "../middlewares/validationSchemas.middleware";
import { signInSchema, signUpSchema } from "../schema/auth.schema";
import authController from "../controllers/auth.controller";

const authRouter = Router()

authRouter.post('/sign-up', validationBody(signUpSchema), authController.create)
authRouter.post('/sign-in', validationBody(signInSchema), authController.signIn)

export default authRouter