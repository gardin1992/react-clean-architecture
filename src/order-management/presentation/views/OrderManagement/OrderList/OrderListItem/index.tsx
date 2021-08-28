import { toDecimal } from "app/main/utils/math";
import { format } from "date-fns";
import {
  SListItem,
  SListItemImage,
  SListITemRequestNumber,
  SListItemRow,
  SListITemStatus,
  SListItemTitle,
  SListITemValueTotal,
  SListItemGrid,
} from "order-management/presentation/views/OrderManagement/OrderList/OrderListItem/styles";

export type OrderListItemProps = {
  avatar?: string;
  requestNumber: string;
  status: string;
  title: string;
  deliveryTime: Date;
  valueTotal: number;
};
export function OrderListItem({
  avatar,
  deliveryTime,
  requestNumber,
  status,
  valueTotal,
  title,
}: OrderListItemProps) {
  return (
    <SListItem className={`orderListItem--${status}`}>
      <SListItemImage>
        <img src={avatar} alt="avatar" title="avatar" />
      </SListItemImage>
      <SListItemGrid>
        <SListItemTitle>{title}</SListItemTitle>
        <SListItemRow>
          <SListITemRequestNumber>{requestNumber}</SListITemRequestNumber>
          <SListITemStatus>{status}</SListITemStatus>
        </SListItemRow>
        <SListItemRow>
          <SListITemRequestNumber>
            {format(deliveryTime, "hh:mm dd/MM/yyyy")}
          </SListITemRequestNumber>
          <SListITemValueTotal>{toDecimal(valueTotal)}</SListITemValueTotal>
        </SListItemRow>
      </SListItemGrid>
    </SListItem>
  );
}

OrderListItem.defaultProps = {
  avatar: "",
};
