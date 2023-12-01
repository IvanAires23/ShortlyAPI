import { faker } from "@faker-js/faker";
import { ObjectId } from "mongodb";

function userFaker() {
     return {
        _id: new ObjectId(1),
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.lorem.word()
    }
}

export default userFaker