import { Router, type IRouter } from "express";
import { upload } from "@config/multerConfig.js";
import { RegisterProductController } from "../register.controller.js";
import { UpdateProductController } from "../update.controller.js";
import { ListProductControlelr } from "../list.controller.js";
import { FindProductController } from "../find.controller.js";

const router: IRouter = Router();

router.get("/products", ListProductControlelr);

router.get("/products/find", FindProductController);

router.post("/products", RegisterProductController);

router.patch("/products", UpdateProductController);


export default router;

