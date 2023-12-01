import { db } from "../../src/config/database";

export async function cleanDB() {
    await db.collection('users').deleteMany()
}