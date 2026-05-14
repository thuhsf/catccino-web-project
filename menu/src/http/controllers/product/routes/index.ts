import { Router, type IRouter } from "express";
import { RegisterProductController } from "../register.controller.js";
import { UpdateProductController } from "../update.controller.js";

import { upload } from "@config/multerConfig.js";

const router: IRouter = Router();

router.post("/products", upload.single("product_image"), RegisterProductController);

router.patch("/products", upload.single("product_image"), UpdateProductController);

export default router;

