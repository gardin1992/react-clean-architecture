import { useEffect } from "react";

import { useRepository } from "order-management/presentation/hooks/useRepository";

import { IRepository } from "app/infra/repositories/IRepository";
import { PageTitle } from "app/presentation/components/page-title";
import { SProductListItem } from "./styles";
import { randomOrder } from "order-management/main/utils/randoms";

type Props = {
  repository: IRepository;
};

export function ProductManagement({ repository }: Props) {
  const { items, getAll } = useRepository(repository);

  useEffect(() => {
    getAll({});
  }, [getAll]);

  return (
    <div>
      <PageTitle title="Gestão de Produto" subtitle="Lista dos Produtos" />
      <SProductListItem
        className="OrderListItemTest"
        items={[...items, { ...randomOrder(), status: "Em Preparo" }]}
      />
    </div>
  );
}
