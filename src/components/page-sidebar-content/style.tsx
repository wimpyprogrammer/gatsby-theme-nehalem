import styled from "styled-components";
import Theme from "../../styles/theme";

export const LatestPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 310px;

  @media (max-width: ${Theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
