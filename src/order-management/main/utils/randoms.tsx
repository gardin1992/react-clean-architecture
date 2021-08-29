import faker from "faker/locale/pt_BR";

import { getRandomInt } from "app/main/utils/math";
import { OrderListItemProps } from "order-management/presentation/components/order-list-item";

export function randomOrderStatus(): string {
  const orderStatus = [
    "Pendente",
    "EmPreparo",
    "Pronto",
    "ACaminho",
    "Recusado",
  ];

  const index = getRandomInt(0, orderStatus.length - 1);
  return orderStatus[index];
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
