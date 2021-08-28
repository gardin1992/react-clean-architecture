export type RepositoryQueryProps = {
  skip?: number;
  limit?: number;
};

export interface IRepository {
  getAll(props: RepositoryQueryProps): Promise<Response>;
  getById(id: string): Promise<Response>;
}
