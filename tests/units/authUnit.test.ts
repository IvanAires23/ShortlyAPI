import authRepository from "../../src/repository/auth.repository";
import authService from "../../src/service/auth.service"
import signUpFaker from "../factorys/signUp.factory";

describe('auth unit tests', () => {
    it("should return 409 when email already register", async () => {
        jest.spyOn(authRepository, "findByEmail").mockImplementationOnce((): any => {
            return true
        });
    
        const user = signUpFaker()
        const response = authService.create(user)
        expect(response).rejects.toEqual(
            { message: "Email already use", name: "conflict" }
        )
    })
})