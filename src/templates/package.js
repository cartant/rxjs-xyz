import { graphql } from "gatsby";
import React from "react";
import Bio from "../components/bio";
import Details from "../components/details";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

const PackageTemplate = (props) => {
  const node = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={node.frontmatter.title}
        description={node.frontmatter.description || node.excerpt}
        image={"/reactivex-card.png"}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {node.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            <Details frontmatter={node.frontmatter} />
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: node.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  );
};

export default PackageTemplate;

export const pageQuery = graphql`
  query PackageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        authorGitHub
        packageGitHub
      }
    }
  }
`;
