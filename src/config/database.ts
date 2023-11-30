import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.DATABASE_URL)
export async function startDB() {
    try {
        await mongoClient.connect()
        console.log("MongoDB conectado")
    } catch (err) {
        console.log(err.message);
    }
}

export const db = mongoClient.db()
