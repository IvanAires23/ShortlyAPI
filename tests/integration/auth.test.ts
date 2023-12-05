import supertest from "supertest";
import app from "../../src/app";
import { cleanDB } from "../helpers/clear";
import signUpFaker from "../factories/signUp.factory";
import httpStatus from "http-status";
import { faker } from "@faker-js/faker";
import userFactory from "../factories/user.factory";
import bcrypt from "bcrypt";

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
    });

    it("should return 200 when login user", async () => {
        const email = faker.internet.email();
        const password = faker.lorem.word({ length: 8 });
        const hash = await bcrypt.hash(password, 10)
        await userFactory(email, hash)
        const response = await server.post("/auth/sign-in").send({
            email,
            password
        });

        expect(response.status).toBe(httpStatus.OK);
        expect(response.body).toEqual({ token: expect.any(String) })

    })
})