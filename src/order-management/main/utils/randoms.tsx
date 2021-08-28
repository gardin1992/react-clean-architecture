import { IOrderStatusType } from "order-management/domain/models/order-model";

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
