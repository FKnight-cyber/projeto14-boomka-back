import { Router } from "express";
import productSchema from "../schemas/productSchema";
import insertIntoCart from "../controllers/cartController";

const cartRouter = Router();

cartRouter.post("/carrinho",productSchema,insertIntoCart)

export default cartRouter;