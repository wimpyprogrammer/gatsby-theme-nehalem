import styled from "styled-components";
import {Link} from "gatsby";
import Img from "gatsby-image";
import Theme from "../../styles/theme";

export const LogoImage = styled(Img)`
  max-height: 30px;
  width: 30px;
  margin-right: 45px;

  @media (max-width: ${Theme.breakpoints.sm}) {
    margin-right: 15px;
  }
`;

export const HomeLink = styled(Link)`
  align-self: center;
  height: 30px;
`;
