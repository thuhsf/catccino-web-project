import { Router, type IRouter } from "express";
import { CreateOrderController } from "@controllers/order/CreateOrderController.js";

const router: IRouter = Router();

router.post("/orders", CreateOrderController);

export default router;