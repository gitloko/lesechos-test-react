import { theme } from "@/styles/global";
import styled from "styled-components";
import Text from "../Text/Text";

export const SquareContainer = styled.div`
  height: 201px;
  width: 302px;
  background-color: ${theme.colors.gray};
  position: relative;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledText = styled(Text)`
  color: ${theme.colors.white};
  text-shadow: 1px 1px 1px #0000004c;
`;
