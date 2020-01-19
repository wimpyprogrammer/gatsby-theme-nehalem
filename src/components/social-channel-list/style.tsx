import styled from "styled-components";

export const StyledSocialChannels = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StyledSocialChannel = styled.li`
  display: inline-block;
  margin: 0 10px;
  font-size: 1.6em;
  opacity: .7;
  transition: opacity .5s;

  &:hover {
    opacity: 1;
  }
`;
