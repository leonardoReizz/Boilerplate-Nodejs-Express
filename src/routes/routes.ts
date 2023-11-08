import { Router } from "express";
import { modelRoutes } from "./model.routes";

const routes = Router();

routes.use("/model", modelRoutes);

export { routes };
