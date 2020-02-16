import styled from "styled-components";

export const StyledNav = styled.nav`
  .toc-list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    .toc-list {
      padding-left: 17px;
      padding-top: 10px;
    }
  }

  .toc-list-item {
    line-height: 1.2em;
    padding-bottom: 10px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  .toc-link {
    color: #808080;
    text-decoration: none;
  }

  .is-active-link {
    color: #404040;
    font-weight: 700;
  }
`;
