import { faker } from "@faker-js/faker";
import { db } from "../../src/config/database";

function userFactory(email?: string, password?: string) {
      const user = {
        name: faker.person.firstName(),
        email: email || faker.internet.email(),
        password: password || faker.lorem.word()
      }
    
   return db.collection("users").insertOne(user)
}

export default userFactory