import { AxiosInstance } from "axios";

import {
  IRepository,
  RepositoryQueryProps,
} from "app/infra/repositories/IRepository";

export function OrderRepository(httpClient: AxiosInstance): IRepository {
  async function getAll({
    skip,
    limit,
  }: RepositoryQueryProps): Promise<Response> {
    return httpClient.get(`orders?skip=${skip}&limit=${limit}`);
  }

  async function getById(id: string): Promise<Response> {
    return httpClient.get(`orders/${id}`);
  }

  return {
    getAll,
    getById,
  };
}
