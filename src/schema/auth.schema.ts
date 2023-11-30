import Joi from "joi";
import { SignUp } from "../protocols";

export const signUpSchema = Joi.object<SignUp>({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
})