import React, {CSSProperties, FunctionComponent} from "react";
import {graphql, useStaticQuery} from "gatsby";
import {StyledAvatar} from "./style";

export interface AvatarProps {
  alt: string;
  style?: CSSProperties;
}

/**
 * Placeholder component which shows your avatar.
 */
const Avatar: FunctionComponent<AvatarProps> = ({alt, style}) => {
  const logo = useStaticQuery(graphql`
    {
      file(sourceInstanceName: {eq: "themeAssets"}, name: {eq: "nehalist-gatsby"}) {
        childImageSharp {
          gatsbyImageData(width: 55, height: 55, layout: FIXED)
        }
      }
    }
  `);

  return <StyledAvatar image={logo.file.childImageSharp.gatsbyImageData} alt={alt} style={style} />;
};

export default Avatar;
