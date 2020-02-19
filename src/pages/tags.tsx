import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import {graphql} from "gatsby";
import Subheader from "../components/subheader";
import {Tag} from "../utils/models";
import {Card} from "../components/card";
import slugify from "slugify";
import {Grid} from "../components/common";
import Img from "gatsby-image";
import SEO from "../components/seo";
import {TagName,TagSvgIcon} from "../styles/tags";

export interface TagsPageProps {
  data: {
    allTags: {
      edges: Array<{ node: Tag }>;
    };
  };
  location: Location;
}

const TagsPage: FunctionComponent<TagsPageProps> = ({data, location}) => {
  const tags = data.allTags.edges.map(node => node.node);

  return (
    <Layout bigHeader={false}>
      <SEO
        location={location}
        title={`Tags`}
        type={`Series`}
      />
      <Subheader title={`Tags`} subtitle={`${tags.length} tags`}/>
      <Grid columns={{ xl: 6, lg: 5, md: 3 }}>
        {tags.map((tag, index) => (
          <Card
            key={index}
            path={`/tag/${slugify(tag.name, {lower: true})}`}
            compact={true}
            style={{textAlign: 'center'}}
          >
            {/* gatsby-image doesn't handle SVGs, hence we need to take care of it */}
            {tag.icon.extension !== 'svg'
              ? <Img fixed={tag.icon.childImageSharp.fixed}/>
              : <TagSvgIcon src={tag.icon.publicURL} alt={tag.name}/>
            }
            <TagName>
              {tag.name}
            </TagName>
          </Card>
        ))}
      </Grid>
    </Layout>
  );
};

export default TagsPage;

export const query = graphql`
  query {
    allTags {
      edges {
        node {
          name
          icon {
            childImageSharp {
              fixed(height: 55) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
            extension
            publicURL
          }
        }
      }
    }
  }
`;
