import authRepository from "../../src/repository/auth.repository";
import authService from "../../src/service/auth.service"
import userFaker from "../factorys/user.factory";
import signUpFaker from "../factorys/signUp.factory";
import { ObjectId } from "mongodb";

describe('auth unit tests', () => {
    it("should return 409 when email already register", async () => {
        const email = "ivan"
        jest.spyOn(authRepository, "findByEmail").mockImplementationOnce((): any => {
            return true
        });
    
        const user = signUpFaker(email)
        const response = authService.create(user)
        expect(response).rejects.toEqual(
            { message: "Email already use", name: "conflict" }
        )
    })
})