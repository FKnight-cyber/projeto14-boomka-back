import { Router } from "express";
import { getDailyData,getMonthlyData,insertData,getProductData, getMyProduct } from "../controllers/homeController.js";
import authentication from "../middlewares/authentication.js";
import productSchema from "../schemas/productSchema.js";
import tokenMiddleware from "../middlewares/tokenMiddleware.js";

const homeRouter = Router();

homeRouter.get("/monthly", getMonthlyData);
homeRouter.get("/daily", getDailyData);
homeRouter.get("/produtos/:id", getProductData);
homeRouter.post("/", productSchema, insertData);
homeRouter.get("/myproducts", tokenMiddleware, getMyProduct)

export default homeRouter;