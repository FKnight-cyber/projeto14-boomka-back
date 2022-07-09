import { Router } from "express";
import { buy } from "../controllers/buyController.js";
import authentication from "../middlewares/authentication.js"

const buyRouter = Router();

buyRouter.post("/compras",authentication,buy);

export default buyRouter;