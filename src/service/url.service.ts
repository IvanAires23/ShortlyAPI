import { ObjectId } from "mongodb";
import urlRepository from "../repository/url.repository";
import shortid from 'shortid';



async function createUrl(url: string, userId: ObjectId) {

    console.log(userId)

    const shortUrl = shortid.generate()

    console.log(shortUrl);


    await urlRepository.createUrl(url, userId, shortUrl)

    return { id: userId, shortUrl }

}

const urlService = {
    createUrl
}

export default urlService