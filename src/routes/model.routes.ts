import { Request, Response, Router } from "express";
import { createModelController } from "../components/usecases/create-model";

const modelRoutes = Router();

modelRoutes.post("/", (request: Request, response: Response) => {
  return createModelController.handle(request, response);
})

export { modelRoutes };