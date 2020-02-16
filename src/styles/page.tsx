import styled from "styled-components";
import Theme from "../styles/theme";
import {Container} from "../components/common";

export const PageContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${Theme.breakpoints.md}) {
    display: block;
  }

  p:first-child {
    margin-top: 0;
  }
`;

export const PageSidebar = styled.aside`
  margin-left: 50px;

  @media (max-width: ${Theme.breakpoints.md}) {
    margin-left: 0;
  }
`;
