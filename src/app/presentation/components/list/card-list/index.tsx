import { CardListItem, CardListItemProps } from "./card-list-item";
import cx from "classnames";

export type CardListProps = {
  items: CardListItemProps[];
  className?: string;
};

export function CardList({ items, className }: CardListProps) {
  return (
    <ul className={cx(["order-list", className])}>
      {items.map((item) => (
        <CardListItem {...item} />
      ))}
    </ul>
  );
}
