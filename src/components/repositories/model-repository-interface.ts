import { Model } from "../model/Model";
import { ResponseType } from "../../util/Response";
export interface IModelRepository {
  create:(data: Omit<Model, "_id">) => ResponseType;
}