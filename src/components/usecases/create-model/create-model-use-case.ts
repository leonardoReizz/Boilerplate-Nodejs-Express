import { ModelRepository } from "../../repositories/model-repository";
import { InvalidDescription } from "../errors/invalid-description";
import { InvalidName } from "../errors/invalid-name";
import { ICreateModelRequestDTO } from "./create-model-request-dto";

export class CreateModelUseCase {
  constructor(private modelRepository: ModelRepository) {}

  async execute(data: ICreateModelRequestDTO) {
    if(!data.description)
      throw new InvalidDescription();
    if(!data.name)
      throw new InvalidName();
      
    return await this.modelRepository.create(data)
  }
}