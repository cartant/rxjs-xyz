import { Link, graphql } from "gatsby";
import React from "react";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

const Index = (props) => {
  const { data } = props;
  const siteAuthor = data.site.siteMetadata.author;
  const siteTitle = data.site.siteMetadata.title;
  const nodes = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={siteAuthor}
        description={"RxJS community packages"}
        image={"/reactivex-card.png"}
      />
      <Bio />
      {nodes.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>
                By{" "}
                <a href={`https://github.com/${node.frontmatter.authorGitHub}`}>
                  {node.frontmatter.author}
                </a>
                {"\u2002•\u2002"}
                Added {node.frontmatter.date}
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          fileAbsolutePath
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
    }
  }
`;
