import { ObjectId } from "mongodb";
import urlRepository from "../repository/url.repository";
import shortid from 'shortid';

async function createUrl(url: string, userId: ObjectId) {

    const shortUrl = shortid.generate()

    await urlRepository.createUrl(url, userId, shortUrl)

    return { id: userId, shortUrl }

}

const urlService = {
    createUrl
}

export default urlService