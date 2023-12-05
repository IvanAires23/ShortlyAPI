import { Router } from "express";
import authRouter from "./auth.routes";
import urlRouter from "./url.routes";

const router = Router()

router.use('/auth', authRouter)
router.use('/url', urlRouter)

export default router;