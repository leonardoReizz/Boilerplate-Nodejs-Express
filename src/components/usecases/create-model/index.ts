import { ModelRepository } from "../../repositories/model-repository";
import { CreateModelController } from "./create-model-controller";
import { CreateModelUseCase } from "./create-model-use-case";

const modelRepository = new ModelRepository();
const createModelUseCase = new CreateModelUseCase(modelRepository);
const createModelController = new CreateModelController(createModelUseCase);

export { createModelController };