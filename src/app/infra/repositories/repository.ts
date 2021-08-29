import { AxiosInstance, AxiosResponse } from "axios";
import { IRepository, RepositoryQueryProps } from "./IRepository";

export class Repository implements IRepository {
  constructor(
    readonly httpClient: AxiosInstance,
    protected readonly resource: string
  ) {}

  getAll({ skip, limit }: RepositoryQueryProps): Promise<AxiosResponse> {
    return this.httpClient.get(`${this.resource}?skip=${skip}&limit=${limit}`);
  }

  getById(id: string): Promise<AxiosResponse> {
    return this.httpClient.get(`${this.resource}/${id}`);
  }
}
