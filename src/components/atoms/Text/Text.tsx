import React from "react";
import { TextType } from "./Text.styles";
import { TextComponentProps } from "./Text.types";

const Text: React.FC<TextComponentProps> = ({
  as = "p",
  $size = "m",
  $font = "SansProRegular",
  $color = "darkGray",
  children,
}) => {
  return (
    <TextType as={as} $size={$size} $font={$font} $color={$color}>
      {children}
    </TextType>
  );
};

export default Text;
