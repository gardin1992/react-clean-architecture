import { SButton } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IButtonType extends React.HTMLAttributes<any> {
  children: string | JSX.Element;
  variant?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export function Button({ children, variant, type, ...props }: IButtonType) {
  return (
    <SButton
      {...props}
      className={variant}
      role={variant === "link" ? "link" : "button"}
      type={type}
    >
      {children}
    </SButton>
  );
}

Button.defaultProps = {
  variant: "primary",
};
