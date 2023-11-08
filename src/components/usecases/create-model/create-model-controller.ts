import { Request, Response } from "express";
import { ICreateModelRequestDTO } from "./create-model-request-dto";
import { CreateModelUseCase } from "./create-model-use-case";

export class CreateModelController {
  constructor(private createModelUseCase: CreateModelUseCase) {}

  async handle(request: Request, response: Response) {
    const data: ICreateModelRequestDTO = request.body;
    try {
      const create = await this.createModelUseCase.execute(data);
      return response.status(create.data).json(create.data);
    } catch (e) {
      const errorMessage = (e as Error).message;
      return response.status(400).json({ message: errorMessage });
    }
  }
}
