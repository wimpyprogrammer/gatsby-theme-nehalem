import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {Post} from "../utils/models";
import {Card} from "../components/card";
import TagList from "../components/tag-list";
import SidebarContent from "../components/sidebar-content";
import SEO from "../components/seo";
import {ArchiveLink,ArchiveLinkWrapper,HomeContainer,PostsContainer,Sidebar} from "../styles/posts";

export interface PostsPageProps {
  pageContext: {
    posts: Post[];
    postsPerPage: number;
  };
  location: Location;
}

const PostsPage: FunctionComponent<PostsPageProps> = ({ pageContext, location }) => {
  const posts = pageContext.posts.slice(0, pageContext.postsPerPage);

  return (
    <Layout>
      <SEO location={location} type={`WebSite`} />
      <HomeContainer>
        <PostsContainer>
          {posts.map((post, index) => (
            <Card
              title={post.frontmatter.title}
              path={post.frontmatter.path}
              featuredImage={post.frontmatter.featuredImage}
              content={post.frontmatter.excerpt}
              key={index}
              meta={
                {
                  time: post.frontmatter.created,
                  timePretty: post.frontmatter.createdPretty,
                  tag: post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null,
                }
              }
              style={{gridArea: index === 0 ? 'latest' : undefined}}
              halfImage={index === 0}
            />
          ))}
          <ArchiveLinkWrapper>
            <ArchiveLink to={`/archive`}>More posts</ArchiveLink>
          </ArchiveLinkWrapper>
        </PostsContainer>
        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </HomeContainer>
      <TagList />
    </Layout>
  );
};

export default PostsPage;
