import React, {createRef, FunctionComponent, useState} from "react";
import Layout from "../components/layout";
import {Post, Tag} from "../utils/models";
import Toc from "../components/toc";
import ReadingProgress from "../components/reading-progress";
import {graphql, Link} from "gatsby";
import {getSrc} from "gatsby-plugin-image";
import slugify from "slugify";
import Bio from "../components/bio";
import Comments from "../components/comments";
import SEO from "../components/seo";
import {FaAlignJustify, FaTimes} from "react-icons/fa";
import {
  BioWrapper,
  FeaturedImage,
  FooterTagLink,
  LeftSidebar,
  PostAddition,
  PostAdditionContent,
  PostContainer,
  PostContent,
  PostFooter,
  PostHeader,
  PostMeta,
  PostTitle,
  StyledPost,
  TocWrapper,
  ToggleTocButton,
} from "../styles/post";

export interface PostTemplateProps {
  data: {
    primaryTag: Tag | null;
    post: Post;
  };
  location: Location;
}

const PostTemplate: FunctionComponent<PostTemplateProps> = ({data, location}) => {
  const [showToc, setShowToc] = useState<boolean>(false);
  const post                  = data.post;
  const readingProgressRef    = createRef<HTMLElement>();
  const primaryTag            = data.primaryTag;
  const toggleToc             = () => setShowToc(!showToc);

  return (
    <Layout bigHeader={false}>
      <SEO
        location={location}
        title={post.frontmatter.title}
        publishedAt={post.frontmatter.created}
        updatedAt={post.frontmatter.updated}
        tags={post.frontmatter.tags}
        description={post.frontmatter.excerpt}
        image={post.frontmatter.featuredImage ? getSrc(post.frontmatter.featuredImage) : null}
      />
      <ReadingProgress target={readingProgressRef} color={primaryTag ? primaryTag.color : undefined}/>
      <PostContainer>
        {post.headings.find(h => h.depth > 1) &&
        <>
            <LeftSidebar show={showToc}>
                <TocWrapper>
                    <Toc onClick={toggleToc}/>
                </TocWrapper>
            </LeftSidebar>
            <ToggleTocButton
                role={`button`}
                aria-label={`Toggle table of contents`}
                onClick={toggleToc}
            >
              {showToc ? <FaTimes/> : <FaAlignJustify/>}
            </ToggleTocButton>
        </>
        }
        <PostContent>
          <article className={`post`} ref={readingProgressRef}>
            <PostHeader>
              <PostMeta>
                {post.frontmatter.tags.length > 0 &&
                <Link to={`/tag/${slugify(post.frontmatter.tags[0], {lower: true})}`}>{post.frontmatter.tags[0]}</Link>
                }
                <time dateTime={post.frontmatter.created}>{post.frontmatter.createdPretty}</time>
              </PostMeta>
              <PostTitle>{post.frontmatter.title}</PostTitle>
            </PostHeader>
            {post.frontmatter.featuredImage &&
              <FeaturedImage image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData} alt=""/>
            }
            <StyledPost dangerouslySetInnerHTML={{__html: post.html}} className={`post`}/>
            <PostFooter>
              <p>
                Published under&nbsp;
                {post.frontmatter.tags.map((tag, index) => (
                  <span key={index}>
                    <FooterTagLink
                      to={`/tag/${slugify(tag, {lower: true})}`}
                    >
                      {tag}
                    </FooterTagLink>
                    {post.frontmatter.tags.length > index + 1 && <>, </>}
                  </span>
                ))}
                &nbsp;on <time dateTime={post.frontmatter.created}>{post.frontmatter.createdPretty}</time>.
              </p>
              {post.frontmatter.updated !== post.frontmatter.created &&
              <p>Last updated on <time dateTime={post.frontmatter.updated}>{post.frontmatter.updatedPretty}</time>.</p>
              }
            </PostFooter>
          </article>
        </PostContent>
      </PostContainer>
      <PostAddition>
        <PostAdditionContent>
          <BioWrapper>
            <Bio textAlign={`center`} showName={true}/>
          </BioWrapper>
        </PostAdditionContent>
      </PostAddition>
      <Comments post={post} />
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query PrimaryTag($postId: String!, $primaryTag: String!) {
    post: markdownRemark(
      id: { eq: $postId }
    ) {
      headings {
        depth
      }
      frontmatter {
        title
        path
        tags
        excerpt
        created
        createdPretty: created(formatString: "DD MMMM, YYYY")
        updated
        updatedPretty: updated(formatString: "DD MMMM, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
      html
    }
    primaryTag: tags(name: { eq: $primaryTag }) {
      name
      color
    }
  }
`;
