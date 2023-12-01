import { faker } from "@faker-js/faker";

function signUpFaker(email?: string) {
    const password = faker.lorem.words()
    return {
        name: faker.person.firstName(),
        email: email || faker.internet.email(),
        password,
        confirmPassword: password
    }
}

export default signUpFaker