import styled from "styled-components";
import {Link} from "gatsby";
import Theme from "../styles/theme";
import {Container, Grid} from "../components/common";

export const HomeContainer = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) .25fr;
  grid-column-gap: 30px;

  @media (max-width: ${Theme.breakpoints.xl}) {
    grid-template-columns: 1fr;
  }
`;

export const PostsContainer = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "latest latest" ". .";
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: -30px;

  @media (max-width: ${Theme.breakpoints.sm}) {
    display: block;
    padding: 0;

    article {
      margin-bottom: 30px;
    }
  }
`;

export const Sidebar = styled.aside`
  width: 315px;
  padding-top: 30px;

  @media (max-width: ${Theme.breakpoints.xl}) {
    margin: 30px auto;
    border-top: 2px #e5eff5 solid;
    padding: 20px;
    width: 100%;
  }
`;

export const ArchiveLinkWrapper = styled.div`
  grid-column: 1 / -1;
  text-align: center;
`;

export const ArchiveLink = styled(Link)`
  font-size: .8em;
  padding: 10px;
  border-radius: .3em;
  transition: background-color .5s;
  background-color: #f2f2f2;

  &:hover {
    background-color: #e6e6e6;
  }
`;
