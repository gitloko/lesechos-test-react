export type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface TextStylesProps {
  $size: "s" | "m" | "l" | "xl";
  $font: string;
  $color: string;
}

export interface TextComponentProps {
  as?: TextType;
  $size?: "s" | "m" | "l" | "xl";
  $font?: string | undefined;
  children: React.ReactNode;
  $color?: string | undefined;
}
