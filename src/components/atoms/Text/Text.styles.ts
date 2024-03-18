import styled from "styled-components";
import { TextStylesProps } from "./Text.types";

export const TextType = styled.p<TextStylesProps>`
  font-family: ${(props) => props.$font}, sans-serif;
  color: ${(props) => props.theme.colors[props.$color]};
  font-size: ${(props) => props.theme.fontSizes[props.$size]};

  letter-spacing: -0.16px;
  line-height: 26px;
  position: relative;
  text-align: center;
`;
