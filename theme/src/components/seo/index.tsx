import React, {FunctionComponent} from "react";
import Helmet from 'react-helmet';
import {graphql, useStaticQuery} from "gatsby";
import {SiteMetadata} from "../../utils/models";
import url from "url";

export interface SEOProps {
  title?: string;
  lang?: string;
  description?: string;
  location: Location;
  publishedAt?: string;
  updatedAt?: string;
  isArticle?: boolean;
  tags?: string[];
  type?: 'WebSite' | 'Series' | 'Article';
  image?: string;
}

const SEO: FunctionComponent<SEOProps> = ({
                                            title,
                                            description,
                                            lang = 'en',
                                            location,
                                            publishedAt,
                                            updatedAt,
                                            isArticle = false,
                                            tags = [],
                                            type = `Article`,
                                            image,
                                          }) => {
  const {site}          = useStaticQuery<SiteMetadata>(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          topics
          author {
            name
            description
            social {
              twitter
              facebook
            }
          }
        }
      }
    }
  `);
  const metadata        = site.siteMetadata;
  const siteTitle       = title ? `${title} - ${metadata.title}` : metadata.title;
  const metaDescription = description
    ? description
    : metadata.description;
  const metaImage       = image ? `${metadata.siteUrl}${image}` : null;
  const canonical       = url.resolve(metadata.siteUrl, location.pathname);

  return (
    <Helmet
      htmlAttributes={{lang}}
      title={siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:type`,
          content: isArticle ? `article` : `website`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          name: `twitter:label1`,
          content: `Written by`,
        },
        {
          name: `twitter:data1`,
          content: metadata.author.name,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metadata.author.name,
        },
        {
          name: `twitter:title`,
          content: siteTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metadata.topics.concat(tags).join(', '),
        },
      ]
        .concat(
          publishedAt ? [{
            name: `article:published_time`,
            content: publishedAt,
          }] : [],
          updatedAt ? [{
            name: `article:modified_time`,
            content: updatedAt,
          }] : [],
          tags.length > 0 ? [{
            name: `twitter:label2`,
            content: `Filed under`,
          }, {
            name: `twitter:data2`,
            content: tags[0],
          }] : [],
          metaImage ? [{
            property: `og:image`,
            content: metaImage,
          }, {
            name: `twitter:image`,
            content: metaImage,
          }] : [],
        )
      }
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": type,
          author: {
            "@type": "Person",
            name: metadata.author.name,
          },
          keywords: tags.length > 0 ? tags.join(`, `) : undefined,
          headline: siteTitle,
          url: canonical,
          datePublished: publishedAt || undefined,
          dateModified: updatedAt || undefined,
          image: metaImage ? {
            "@type": "ImageObject",
            url: metaImage,
            width: 1000,
            height: 520,
          } : undefined,
          publisher: {
            "@type": "Organization",
            name: metadata.title,
          },
          description: metaDescription,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": metadata.siteUrl,
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
