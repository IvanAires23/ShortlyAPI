import express from "express";
import cors from "cors";
import { loadEnv } from "./config/envs";

loadEnv();
const app = express()

app.use(express.json());
app.use(cors());
app.get('/health', (req, res) => {
    console.log(process.env.DATABASE_URL)
    return res.send("I'm Okay!")
})

export default app;