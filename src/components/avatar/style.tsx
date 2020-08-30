import styled from "styled-components";
import Img from "gatsby-image";
import {AvatarProps} from "./index";

export const StyledAvatar = styled(Img)<AvatarProps>`
  max-width: 55px;
  border-radius: 100%;
`;
