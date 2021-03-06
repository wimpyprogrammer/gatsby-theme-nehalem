import React, {FunctionComponent} from "react";
import {Post} from "../../utils/models";
import {Grid} from "../common";
import {Card} from "../card";

export interface PostGridProps {
  posts: Post[];
}

const PostGrid: FunctionComponent<PostGridProps> = ({posts}) => (
  <Grid>
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
      />
    ))}
  </Grid>
);

export default PostGrid;
