import { graphql } from "gatsby";
import * as React from "react";
import { sliceResolver } from "../../../prismic/sliceResolver";
import Layout from "../../components/Layout";

const Page = (props) => {
  const { data } = props.data.allPrismicPage.edges[0].node;
  const { page_title, page_description, body } = data;
  const pageTitle = page_title.text;
  const pageDescription = page_description.text;
  return (
    <Layout title={pageTitle} description={pageDescription}>
      <main>{body.map(sliceResolver)}</main>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($uid: String, $lang: String) {
    allPrismicPage(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
      edges {
        node {
          data {
            page_title {
              text
            }
            body {
              ... on PrismicPageBodyPageHeader {
                id
                slice_type
                primary {
                  body1 {
                    html
                  }
                  theme
                  title {
                    text
                  }
                }
              }
              ... on PrismicPageBodyRichText {
                id
                slice_type
                slice_label
                primary {
                  theme
                  text {
                    html
                  }
                }
              }
              ... on PrismicPageBodyHero {
                id
                slice_type
                primary {
                  hero_title {
                    html
                    text
                  }
                  hero_body {
                    html
                  }
                }
              }
              ... on PrismicPageBodyImageText {
                id
                slice_type
                primary {
                  theme
                  direction
                  content {
                    html
                  }
                  image {
                    fluid {
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                    }
                    alt
                  }
                }
              }
              ... on PrismicPageBodyWidget {
                id
                slice_type
                primary {
                  theme
                  widget
                  title {
                    text
                  }
                }
              }
            }
            page_description {
              text
            }
          }
          uid
          prismicId
        }
      }
    }
  }
`;

export default Page;
