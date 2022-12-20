import { Model } from "../model/Model";
import { IModelRepository } from "./model-repository-interface";
import { ResponseType } from "../../util/Response";
export class ModelRepository implements IModelRepository {
  async create(data: Omit<Model, "_id">): ResponseType {
    console.log(data);
    return {
      status: 200,
      data: {
        message: 'ok'
      }
    }
  }
}