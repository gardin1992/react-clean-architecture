export type IOrderUser = {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  documentId?: string;
  avatar?: string;
};

export type IOrderProduct = {
  _id: string;
  code?: string;
  name: string;
  variation?: string;
  price: number;
  qty: number;
  created: Date;
};

export type IOrderPaymentType =
  | "Dinheiro"
  | "Cartão Credito"
  | "Cartão Debito"
  | "Pix";

export type IOrderStatusType =
  | "Pendente"
  | "Em Preparo"
  | "Pronto"
  | "A Caminho"
  | "Recusado";

export type IOrder = {
  _id: string;
  user: IOrderUser;
  items: IOrderProduct[];
  total: number;
  forecast?: Date;
  created: Date;
  lastUpdated?: Date;
  status: string;
  paymentType: IOrderPaymentType;
  deliveryAddress: "string";
};
