import { Router } from "express";
import { insertIntoCart, getCart, deleteFromCart, cleanCart} from "../controllers/cartController.js";
import authentication from "../middlewares/authentication.js"

const cartRouter = Router();

cartRouter.post("/carrinho",authentication,insertIntoCart);
cartRouter.get("/carrinho",authentication,getCart);
cartRouter.delete("/carrinho/:id",authentication,deleteFromCart);
cartRouter.delete("/carrinho",authentication,cleanCart);

export default cartRouter;