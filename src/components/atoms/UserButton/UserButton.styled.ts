import styled from "styled-components";

export const UButton = styled.button`
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.darkGray};
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
    color: ${(props) => props.theme.colors.gray};
  }
`;
