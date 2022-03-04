import styled from "styled-components";
import {SubheaderProps} from "./index";

export const StyledSubheader = styled.div<Pick<SubheaderProps, 'backgroundColor' | 'textColor'>>`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#000'};
  color: ${props => props.textColor ? props.textColor : '#fff'};
  display: flex;
  align-items: center;
  height: 90px;
  margin-bottom: 30px;
`;

export const SubheaderTitle = styled.h1`
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  margin: 0;
  line-height: 1em;
`;

export const SubheaderSubtitle = styled.small`
  font-weight: normal;
  display: block;
  opacity: .9;
`;
