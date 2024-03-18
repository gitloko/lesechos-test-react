import { theme } from "@/styles/global";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
  font-family: "SansProBold", sans-serif;
  font-size: ${theme.fontSizes.s};
  color: white;
  width: 118px;
  height: 40px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.$variant === "primary" &&
    css`
      background-color: ${theme.colors.red};

      &:hover {
        box-shadow: 0 0 10px ${theme.colors.red};
      }
    `}

  ${(props) =>
    props.$variant === "secondary" &&
    css`
      background-color: ${theme.colors.yellow};
      color: ${theme.colors.darkGray};

      &:hover {
        box-shadow: 0 0 10px ${theme.colors.yellow};
      }
    `}
`;
