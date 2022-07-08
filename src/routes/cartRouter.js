import { Router } from "express";
import { insertIntoCart, getCart} from "../controllers/cartController.js";
import authentication from "../middlewares/authentication.js"
const cartRouter = Router();

cartRouter.post("/carrinho",authentication,insertIntoCart);
cartRouter.get("/carrinho",authentication,getCart)

export default cartRouter;