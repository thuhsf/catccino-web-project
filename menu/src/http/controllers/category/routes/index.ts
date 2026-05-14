import { Router, type IRouter } from "express";
import { UpdateCategoryController } from "../update.controller.js";
import { RegisterCategoryController } from "../register.controller.js";
import { ListCategoryController } from "../list.controller.js";
import { FindCategoryController } from "../find.controller.js";
import { DeleteCategoryController } from "../delete.controller.js";

const router: IRouter = Router();

router.get("/categories", ListCategoryController);
router.get("/categories/:id", FindCategoryController);

router.post("/categories", RegisterCategoryController);

router.patch("/categories/:id", UpdateCategoryController);

router.delete("/categories/:id", DeleteCategoryController);

export default router;

