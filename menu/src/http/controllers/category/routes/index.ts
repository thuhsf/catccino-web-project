import { Router, type IRouter } from "express"
import { UpdateCategoryController } from "./update.controller.js";
import { RegisterCategoryController } from "../register.controller.js";
import { ListCategoryController } from "./list.controller.js";
import { FindCategoryController } from "./find.controller.js";
import { DeleteCategoryController } from "./delete.controller.js";

const router: IRouter = Router()

router.get("/list/category", ListCategoryController);
router.get("/find/category/:id", FindCategoryController);

router.post("/create/category", RegisterCategoryController);

router.patch("/update/category/:id", UpdateCategoryController);

router.delete("/delete/category/:id", DeleteCategoryController);

export default router;

