import { SPageSubtitle, SPageTitle, SPageTitleContent } from "./styles";

export type PageTitleProps = {
  title: string;
  subtitle?: string;
};

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <SPageTitleContent>
      <SPageTitle>
        {title}
        <SPageSubtitle>{subtitle ? ` - ${subtitle}` : ""}</SPageSubtitle>
      </SPageTitle>
    </SPageTitleContent>
  );
}
