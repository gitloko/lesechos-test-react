import { theme } from "@/styles/global";
import styled from "styled-components";

export const HeadingContainer = styled.div`
  align-items: center;
  background-color: ${theme.colors.lightGray};
  border-radius: 10px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  position: relative;
`;
