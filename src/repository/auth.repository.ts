import { ObjectId } from "mongodb";
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

function createSession(id: ObjectId, token: string) {
    return db.collection('sessions').insertOne({
        id,
        token
    })
}

const authRepository = {
    create,
    findByEmail,
    createSession
}

export default authRepository