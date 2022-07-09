import { Router } from "express";
import authRouter from "./authRouter.js";
import homeRouter from "./homeRouter.js";
import cartRouter from "./cartRouter.js";
import buyRouter from "./buyRouter.js";

const router = Router();

router.use(authRouter);
router.use(homeRouter);
router.use(cartRouter);
router.use(buyRouter);

export default router;