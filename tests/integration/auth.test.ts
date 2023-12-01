import supertest from "supertest";
import app from "../../src/app";
import { cleanDB } from "../helpers/clear";
import signUpFaker from "../factorys/signUp.factory";
import httpStatus from "http-status";
import { faker } from "@faker-js/faker";

const server = supertest(app)

beforeEach(async () => {
    await cleanDB();
})

describe('POST /auth', () => {
    it("should return 201 when user resgisted", async () => {
        const password = faker.lorem.words()
        const user = signUpFaker(password);
        const response = await server.post("/auth/sign-up")
            .send(user)
        
        expect(response.status).toBe(httpStatus.CREATED)
    })
})