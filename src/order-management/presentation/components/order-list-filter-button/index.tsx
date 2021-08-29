import { SListFilterButton } from "./styles";

export type OrderListFilterButtonProps = {
  variant: string;
  children: string | JSX.Element;
};

export function OrderListFilterButton({
  variant,
  children,
}: OrderListFilterButtonProps) {
  return (
    <SListFilterButton variant={variant} className="OrderListFilterButton">
      {children}
    </SListFilterButton>
  );
}
