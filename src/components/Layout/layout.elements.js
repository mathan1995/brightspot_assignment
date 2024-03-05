import styled from "styled-components";

import { v } from "../../styles/variables";

export const SideLayout = styled.div`
  display: flex;
`;

export const SideMain = styled.main`
  padding: calc(${v.smSpacing} * 2);
  flex: 1;
  margin: 30px;
  background: ${({ theme }) => theme.bg};
  border-radius: ${v.borderRadius};
  box-shadow: ${v.boxShadow} h1 {
    font-size: 14px;
  }
`;
