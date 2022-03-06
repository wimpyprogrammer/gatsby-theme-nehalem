import styled from "styled-components";
import {Link} from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Theme from "../styles/theme";
import {Container} from "../components/common";

export const PostContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 0 !important;
`;

export const LeftSidebar = styled.div<{ show?: boolean }>`
  min-width: 255px;
  max-width: 225px;
  transition: opacity .5s, z-index .5s;

  @media (max-width: ${Theme.breakpoints.xl}) {
    position: fixed;
    opacity: ${props => props.show ? 1 : 0};
    z-index: ${props => props.show ? 1000 : -1};
    background-color: #fff;
    width: 100% !important;
    max-width: 100%;
    padding: 0 20px;
    margin-top: -5px;
    height: calc(100vh - 70px);
  }
`;

export const PostContent = styled.div`
  margin-top: -5px;
  border-right: 1px #e5eff5 solid;
  border-left: 1px #e5eff5 solid;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, .03), 0 3px 46px rgba(0, 0, 0, .1);
  z-index: 10;
  width: ${Theme.components.post.width};
  max-width: 100%;

  li > a,
  p > a {
    color: ${Theme.layout.linkColor};
    border-bottom: 2px ${Theme.layout.linkColor} solid;
  }

  pre {
    margin: 30px 0;
  }

  blockquote {
    border-left: 4px ${Theme.layout.primaryColor} solid;
    background-color: ${Theme.layout.backgroundColor};
    margin: 30px 0;
    padding: 5px 20px;
    border-radius: .3em;
  }

  h3::before, h4::before, h5::before, h6::before {
    display: block;
    content: " ";
    height: 90px;
    margin-top: -90px;
    visibility: hidden;
  }

  h2 {
    border-top: 1px solid #ececec;
    margin-top: 44px;
    padding-top: 40px;
    line-height: 1.2;
  }

  code[class*="language-text"] {
    padding: 5px;
  }

  p > img {
    max-width: 100%;
    border-radius: .3em;
    margin: 30px 0;
  }

  hr {
    border-top: 1px solid #ececec;
    border-bottom: 0;
    margin-top: 44px;
    margin-bottom: 40px;
  }

  .gatsby-resp-image-link {
    margin: 30px 0;
    max-width: 100%;

    .gatsby-resp-image-image {
      border-radius: .3em;
    }
  }
`;

export const TocWrapper = styled.div`
  position: sticky;
  top: 70px;
  padding: 40px 30px 40px 0;
`;

export const PostHeader = styled.header`
  padding: 40px;

  @media (max-width: ${Theme.breakpoints.sm}) {
    padding: 20px;
  }
`;

export const FeaturedImage = styled(GatsbyImage)`
  border-radius: 0;

  @media (max-width: ${Theme.breakpoints.xl}) {
    margin-left: -1px;
    margin-right: -1px;
  }
`;

export const StyledPost = styled.section`
  padding: 40px;

  @media (max-width: ${Theme.breakpoints.sm}) {
    padding: 20px;
  }
`;

export const PostMeta = styled.section`
  display: flex;
  justify-content: space-between;
  opacity: .8;
  font-size: .9em;
`;

export const PostTitle = styled.h1`
  margin: 0;
  padding: 0;
`;

export const PostFooter = styled.footer`
  background-color: #fafafa;
  font-size: .8em;
  color: #666;
  padding: 40px;
  line-height: 1em;

  p {
    margin: 5px 0;
  }
`;

export const FooterTagLink = styled(Link)`
  color: #000 !important;
  text-decoration: none;
  border-bottom: 0 !important;
`;

export const PostAddition = styled.section`
  background-color: #fff;
  border-top: 1px #e5eff5 solid;
  border-bottom: 1px #e5eff5 solid;
  z-index: 700;
  position: relative;
  padding: 40px;
`;

export const PostAdditionContent = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const BioWrapper = styled.div`
  width: 50%;
  margin: auto;

  @media (max-width: ${Theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const ToggleTocButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 100%;
  box-shadow: 0 0 3px rgba(0, 0, 0, .03), 0 3px 46px rgba(0, 0, 0, .1);
  border: 0;
  z-index: 5000;
  width: 50px;
  height: 50px;
  background-color: #20232a;
  color: #fff;
  outline: none;

  @media (min-width: ${Theme.breakpoints.xl}) {
    display: none;
  }
`;
