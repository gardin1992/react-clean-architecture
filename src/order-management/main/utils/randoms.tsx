import { IOrderStatusType } from "order-management/domain/models/order-model";
import { OrderListItemProps } from "order-management/presentation/components/order-list-item";
import faker from "faker/locale/pt_BR";

export function randomOrderStatus(): IOrderStatusType {
  const orderStatus = [
    "Pendente",
    "Em Preparo",
    "Pronto",
    "A Caminho",
    "Recusado",
  ];

  const index = 1;
  return "Pendente";
}

export function randomOrder(): OrderListItemProps {
  return {
    avatar: faker.image.avatar(),
    requestNumber: faker.random.alphaNumeric(),
    deliveryTime: faker.date.future(2021),
    status: randomOrderStatus(),
    title: faker.name.findName() + " " + faker.random.alphaNumeric(),
    valueTotal: parseFloat(faker.commerce.price()),
  };
}
