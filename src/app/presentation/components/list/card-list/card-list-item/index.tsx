import { toDecimal } from "app/main/utils/math";
import { format } from "date-fns";
import {
  SListItem,
  SListItemImage,
  SListItemTextSecondary,
  SListItemRow,
  SListItemText,
  SListItemTitle,
  SListItemDecimal,
  SListItemGrid,
} from "./styles";

export type CardListItemProps = {
  avatar?: string;
  requestNumber: string;
  status: string;
  title: string;
  deliveryTime: Date;
  valueTotal: number;
};

export function CardListItem({
  avatar,
  deliveryTime,
  requestNumber,
  status,
  valueTotal,
  title,
}: CardListItemProps) {
  return (
    <SListItem className={`cardListItem--${status.replace(/\s/, "")}`}>
      <SListItemImage>
        <img src={avatar} alt="avatar" title="avatar" />
      </SListItemImage>
      <SListItemGrid>
        <SListItemTitle>{title}</SListItemTitle>
        <SListItemRow>
          <SListItemTextSecondary>{requestNumber}</SListItemTextSecondary>
          <SListItemText>{status}</SListItemText>
        </SListItemRow>
        <SListItemRow>
          <SListItemTextSecondary>
            {format(deliveryTime, "hh:mm dd/MM/yyyy")}
          </SListItemTextSecondary>
          <SListItemDecimal>{toDecimal(valueTotal)}</SListItemDecimal>
        </SListItemRow>
      </SListItemGrid>
    </SListItem>
  );
}

CardListItem.defaultProps = {
  avatar: "",
};
