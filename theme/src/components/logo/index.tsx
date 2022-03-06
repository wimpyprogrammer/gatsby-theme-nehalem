import React, {FunctionComponent} from "react";
import {graphql, useStaticQuery} from "gatsby";
import {HomeLink,LogoImage} from "./style";

export interface LogoProps {
  title: string;
}

const Logo: FunctionComponent<LogoProps> = ({title}) => {
  const logo = useStaticQuery(graphql`
    {
      file(sourceInstanceName: {eq: "themeAssets"}, name: {eq: "nehalist-gatsby"}) {
        childImageSharp {
          gatsbyImageData(width: 30, height: 30, layout: FIXED)
        }
      }
    }
  `);

  return (
    <HomeLink to={`/`}>
      <LogoImage image={logo.file.childImageSharp.gatsbyImageData} alt={title}/>
    </HomeLink>
  );
}
;

export default Logo;
