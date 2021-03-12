import React, {FunctionComponent} from "react";
import {Container} from "../common";
import {StyledSubheader,SubheaderSubtitle,SubheaderTitle} from "./style";

export interface SubheaderProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
}

const Subheader: FunctionComponent<SubheaderProps> = ({title, subtitle, backgroundColor, textColor}) => (
  <StyledSubheader backgroundColor={backgroundColor} textColor={textColor}>
    <Container>
      <SubheaderTitle>
        {title}
        <SubheaderSubtitle>{subtitle}</SubheaderSubtitle>
      </SubheaderTitle>
    </Container>
  </StyledSubheader>
);

export default Subheader;
