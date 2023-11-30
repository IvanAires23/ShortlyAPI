import { SignUp } from "../protocols";
import authRepository from "../repository/auth.repository";
import bcrypt from "bcrypt"

async function create(body: SignUp) {
    const { email, password, confirmPassword, name } = body;

    const emailRepeted = await authRepository.findByEmail(email)
    if (emailRepeted) throw { name: 'conflict', message: 'Email already use' }

    if (password !== confirmPassword) throw { name: 'badRequest', message: 'Password and confirmpassword not equals' }
    
    const hash = await bcrypt.hash(password, 10)

    const user = await authRepository.create(name, email, hash)
    return user
}

const authService = {
    create
}

export default authService