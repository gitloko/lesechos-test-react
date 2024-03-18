import { theme } from "@/styles/global";
import styled from "styled-components";

export const ArticleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 302px;
`;

export const ArticleContainer = styled.div`
  align-items: center;
  background-color: ${theme.colors.lightGray};
  border-radius: 10px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 20px;
  position: relative;
`;
