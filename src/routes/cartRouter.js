import { Router } from "express";
import productSchema from "../schemas/productSchema.js";
import insertIntoCart from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.post("/carrinho",productSchema,insertIntoCart)

export default cartRouter;