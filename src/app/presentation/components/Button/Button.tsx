import { SButton } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IButtonType extends React.HTMLAttributes<any> {
  children: string | JSX.Element;
}

export function Button({ children, ...props }: IButtonType) {
  return <SButton {...props}>{children}</SButton>;
}
