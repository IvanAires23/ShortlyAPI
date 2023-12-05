import { SignUp } from "../protocols";
import authRepository from "../repository/auth.repository";
import bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"

async function create(body: SignUp) {
    const { email, password, confirmPassword, name } = body;

    const emailRepeted = await authRepository.findByEmail(email)
    if (emailRepeted) throw { name: 'conflict', message: 'Email already use' }

    if (password !== confirmPassword) throw { name: 'badRequest', message: 'Password and confirmpassword not equals' }

    const hash = await bcrypt.hash(password, 10)

    const user = await authRepository.create(name, email, hash)
    return user
}

async function signIn(email: string, password: string) {

    const user = await authRepository.findByEmail(email)
    if (!user) throw { name: 'unauthorized', message: 'Email or password incorrect' }

    const comparePassword = await bcrypt.compare(password, user.password)
    if (!comparePassword) throw { name: 'unauthorized', message: 'Email or password incorrect' }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    await authRepository.createSession(user._id, token)
    return token
}

const authService = {
    create,
    signIn
}

export default authService