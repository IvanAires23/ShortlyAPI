import supertest from "supertest";
import app from "../../src/app";
import { cleanDB } from "../helpers/clear";
import signUpFaker from "../factorys/signUp.factory";
import httpStatus from "http-status";

const server = supertest(app)

beforeEach(async () => {
    await cleanDB();
})

describe('POST /auth', () => {
    it("should return 201 when user resgisted", async () => {
        const user = signUpFaker();
        const response = await server.post("/auth/sign-up")
            .send(user)
        
        expect(response.status).toBe(httpStatus.CREATED)
    })
})