import styled from "styled-components";
import Theme from "../../styles/theme";

export const ReadingProgressBar = styled.div<{ color?: string; }>`
  position: sticky;
  height: 5px;
  top: 70px;
  background-color: ${props => props.color ? props.color : Theme.layout.primaryColor};
  z-index: 500;
`;
