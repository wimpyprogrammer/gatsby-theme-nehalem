import React, {FunctionComponent} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {BackLink,Error,ErrorDescription,ErrorTitle} from "../styles/404";

export interface ErrorProps {
  location: Location;
}

const NotFoundPage: FunctionComponent<ErrorProps> = ({location}) => (
  <Layout bigHeader={false}>
    <SEO
      location={location}
      title={`Page not found`}
    />
    <Error>
      <ErrorTitle>404</ErrorTitle>
      <ErrorDescription>Page not found</ErrorDescription>
      <BackLink to={`/`}>{/* Country roads... */} Take me home!</BackLink>
    </Error>
  </Layout>
);

export default NotFoundPage;
