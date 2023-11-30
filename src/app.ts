import express from "express";
import cors from "cors";
import loadEnvs from "./config/envs";

loadEnvs();

const app = express()

app.use(express.json());
app.use(cors());
app.get('/health', (req, res) => {
    return res.send("I'm Okay!")
})

export default app;