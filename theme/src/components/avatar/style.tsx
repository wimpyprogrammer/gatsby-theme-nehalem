import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import {AvatarProps} from "./index";

export const StyledAvatar = styled(GatsbyImage)<AvatarProps>`
  display: inline-block;
  max-width: 55px;
  border-radius: 100%;
`;
