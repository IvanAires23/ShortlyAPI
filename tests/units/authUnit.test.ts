import { faker } from "@faker-js/faker";
import authRepository from "../../src/repository/auth.repository";
import authService from "../../src/service/auth.service"
import signUpFaker from "../factories/signUp.factory";

describe('auth/sign-up unit tests', () => {
    it("should return 409 when email already register", async () => {
        jest.spyOn(authRepository, "findByEmail").mockImplementationOnce((): any => {
            return true
        });
    
        const user = signUpFaker()
        const response = authService.create(user)
        expect(response).rejects.toEqual(
            { message: "Email already use", name: "conflict" }
        )
    });

    it("should return 400 when password diferent confirmPassword", async () => {
    
        const user = signUpFaker()
        const response = authService.create(user)
        expect(response).rejects.toEqual(
            { name: 'badRequest', message: 'Password and confirmpassword not equals' }
        )
    });
});

describe('auth/sign-in unit tests', () => {
    it("should return 401 when email incorret", async () => {
        jest.spyOn(authRepository, "findByEmail").mockImplementationOnce((): any => {
            return false
        });

        const email = faker.internet.email();
        const password = faker.lorem.word();

        const response = await authService.signIn(email, password)
        expect(response).rejects.toEqual(
            { name: 'unauthorized', message: 'Email or password incorrect' }
        )
    });

    it("should return 400 when password diferent confirmPassword", async () => {
    
        const user = signUpFaker()
        const response = authService.create(user)
        expect(response).rejects.toEqual(
            { name: 'badRequest', message: 'Password and confirmpassword not equals' }
        )
    });
})