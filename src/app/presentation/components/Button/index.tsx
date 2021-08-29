import { SButton } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IButtonType extends React.HTMLAttributes<any> {
  children: string | JSX.Element;
  variant?: string;
}

export function Button({ children, variant, ...props }: IButtonType) {
  return (
    <SButton
      {...props}
      className={variant}
      role={variant === "link" ? "link" : "button"}
    >
      {children}
    </SButton>
  );
}

Button.defaultProps = {
  variant: "primary",
};
