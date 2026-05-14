import express, { type Express } from "express";
import cors from "cors";

import CategoryRoutes from "@controllers/category/routes/index.js";
import ProductRoutes from "@controllers/product/routes/index.js";

const app: Express = express();

app.use(cors({
	origin: ["*"],
	methods: ["GET", "POST", "PATCH", "PUT", "DELETE"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/v1", CategoryRoutes);
app.use("/api/v1", ProductRoutes);


app.get("*", (req, res) => {
	res.status(404).send("Not Found");
});

export { app as AppServer };
