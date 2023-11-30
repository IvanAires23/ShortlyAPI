import express from "express";
import cors from "cors";
import { loadEnv } from "./config/envs";

loadEnv();

import { startDB } from "./config/database";
import router from "./routes";

startDB();


const app = express()

app.use(express.json());
app.use(cors());
app.get('/health', (req, res) => {
    return res.send("I'm Okay!")
})
app.use(router)


export default app;