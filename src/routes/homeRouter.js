import { Router } from "express";
import { getDailyData,getMonthlyData,insertData,getProductData } from "../controllers/homeController.js";
import authentication from "../middlewares/authentication.js";
import productSchema from "../schemas/productSchema.js";

const homeRouter = Router();

homeRouter.get("/monthly", getMonthlyData);
homeRouter.get("/daily", getDailyData);
homeRouter.get("/produtos/:id", getProductData);
homeRouter.post("/", productSchema, insertData);

export default homeRouter;