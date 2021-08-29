import { AxiosResponse } from "axios";

export type RepositoryQueryProps = {
  skip?: number;
  limit?: number;
};

export interface IRepository {
  getAll(props: RepositoryQueryProps): Promise<AxiosResponse>;
  getById(id: string): Promise<AxiosResponse>;
}
