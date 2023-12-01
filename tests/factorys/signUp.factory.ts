import { faker } from "@faker-js/faker";

function signUpFaker(password?: string) {
    return {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: password || faker.lorem.words(),
        confirmPassword: password || faker.lorem.words()
    }
}

export default signUpFaker