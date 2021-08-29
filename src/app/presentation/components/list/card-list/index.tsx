import cx from "classnames";
import styled from "styled-components";

import { CardListItem, CardListItemProps } from "./card-list-item";

export type CardListProps = {
  items: CardListItemProps[];
  className?: string;
};

export const SCardList = styled.ul`
  padding: 10px;
  min-width: 320px;
  li:hover,
  li:focus {
    cursor: pointer;
  }

  background: rgb(250 245 250);
`;

export function CardList({ items, className }: CardListProps) {
  return (
    <SCardList className={cx(["order-list", className])}>
      {items.map((item) => (
        <CardListItem {...item} />
      ))}
    </SCardList>
  );
}
