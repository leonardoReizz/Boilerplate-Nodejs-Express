export interface IResponse {
  status: number;
  data: any;
}

export type ResponseType = Promise<IResponse>;