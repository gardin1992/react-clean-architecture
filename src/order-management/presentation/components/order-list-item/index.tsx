import { format } from "date-fns";

import { toDecimal } from "app/main/utils/math";
import {
  SListItem,
  SListItemImage,
  SListITemRequestNumber,
  SListItemRow,
  SListITemStatus,
  SListItemTitle,
  SListITemValueTotal,
  SListItemGrid,
} from "./styles";

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
    <SListItem className={`cardListItem--${status}`}>
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
