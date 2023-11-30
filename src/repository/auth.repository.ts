import { db } from "../config/database";

function create(name: string, email: string, password: string) {
    return db.collection('users').insertOne({
        name,
        email,
        password
    })
}

function findByEmail(email: string) {
    return db.collection('users').findOne({
        email
    })
}

const authRepository = {
    create,
    findByEmail
}

export default authRepository