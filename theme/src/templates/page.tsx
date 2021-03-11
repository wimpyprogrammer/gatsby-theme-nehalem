import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import Subheader from "../components/subheader";
import {Page} from "../utils/models";
import Theme from "../styles/theme";
import PageSidebarContent from "../components/page-sidebar-content";
import SEO from "../components/seo";
import {PageContainer,PageSidebar} from "../styles/page";

export interface PageTemplateProps {
  pageContext: {
    page: Page;
  };
  location: Location;
}

const PageTemplate: FunctionComponent<PageTemplateProps> = ({ pageContext, location }) => {
  const page = pageContext.page;

  return (
    <Layout bigHeader={false}>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter.excerpt}
        location={location}
      />
      <Subheader title={page.frontmatter.title} backgroundColor={Theme.layout.primaryColor}/>
      <PageContainer>
        <section dangerouslySetInnerHTML={{__html: page.html}}/>
        <PageSidebar>
          <PageSidebarContent />
        </PageSidebar>
      </PageContainer>
    </Layout>
  );
};

export default PageTemplate;
