import { theme } from "@/styles/global";
import styled from "styled-components";

export const StyledBox = styled.div`
  height: 4px;
  width: 70px;
  padding-bottom: 30px;
`;

export const Rectangle = styled.div`
  background-color: ${theme.colors.red};
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;
