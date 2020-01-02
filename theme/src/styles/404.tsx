import {Link} from "gatsby";
import styled from "styled-components";
import Theme from "../styles/theme";

export const Error = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 75vh;
  text-align: center;
`;

export const ErrorTitle = styled.h1`
  display: block;
  font-size: 8em;
  font-weight: bold;
  opacity: .45;
  width: 100%;
  margin: 0 0 15px;
`;

export const ErrorDescription = styled.h2`
  font-size: 1.8em;
  display: block;
  width: 100%;
  margin-bottom: 15px;
`;

export const BackLink = styled(Link)`
  color: ${Theme.layout.primaryColor};

  &:hover {
    text-decoration: underline;
  }
`;
