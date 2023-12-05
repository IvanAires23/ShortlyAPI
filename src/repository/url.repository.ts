import { ObjectId } from "mongodb";
import { db } from "../config/database";

function createUrl(url: string, userId: ObjectId, shortUrl: string) {
    return db.collection('urls').insertOne({
        url,
        userId,
        shortUrl
    })
}

const urlRepository = {
    createUrl
}

export default urlRepository;