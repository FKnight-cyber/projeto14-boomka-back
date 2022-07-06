import { Router } from "express";
import { getData,insertData } from "../controllers/homeController.js";
import authentication from "../middlewares/authentication.js";
import productSchema from "../schemas/productSchema.js";

const homeRouter = Router();

homeRouter.get("/", getData);
homeRouter.post("/", productSchema, insertData);

export default homeRouter;