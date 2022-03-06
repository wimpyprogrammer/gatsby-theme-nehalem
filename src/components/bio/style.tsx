import styled from "styled-components";
import {BioProps} from "./index";

export const StyledBio = styled.section<Pick<BioProps, 'textAlign'>>`
  margin: auto;
  text-align: ${props => props.textAlign};
  width: 100%;
`;

export const AuthorDescription = styled.p`
  margin: 10px 0 13px;

  a {
    color: #000;
    text-decoration: underline;
  }
`;

export const AuthorName = styled.h3`
  margin: 10px;
`;
