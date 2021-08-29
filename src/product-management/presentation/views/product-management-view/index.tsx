import { useEffect } from "react";

import { IRepository } from "app/infra/repositories/IRepository";
import { useRepository } from "app/presentation/hooks/useRepository";
import { PageTitle } from "app/presentation/components/page-title";
import { randomOrder } from "order-management/main/utils/randoms";
import { SProductListItem } from "./styles";

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
