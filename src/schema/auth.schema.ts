import Joi from "joi";
import { SignIn, SignUp } from "../protocols";

export const signUpSchema = Joi.object<SignUp>({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().required()
});

export const signInSchema = Joi.object<SignIn>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
    
})