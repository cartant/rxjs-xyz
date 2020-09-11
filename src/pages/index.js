import { Link, graphql } from "gatsby";
import React from "react";
import Bio from "../components/bio";
import Details from "../components/details";
import Layout from "../components/layout";
import Search from "../components/search";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

const NoMatch = () => {
  return (
    <div style={{ marginTop: rhythm(1) }}>
      <p>Sorry, there’s nothing that matches that search term.</p>
      <p>
        This blog’s search is implemented with Lunr — which supports wildcards.
        A wildcard is represented as an asterisk (*) and can appear anywhere in
        a search term. Lunr’s search capabilities are described{" "}
        <a
          href="https://lunrjs.com/guides/searching.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  );
};

const Index = (props) => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const { edges } = data.allMarkdownRemark;

  const [packages, setPackages] = React.useState(edges);
  const onSearch = React.useCallback(
    ({ slugs, term }) => {
      if (term) {
        setPackages(
          slugs
            .map((slug) => edges.find((edge) => edge.node.fields.slug === slug))
            .filter(Boolean)
        );
      } else {
        setPackages(edges);
      }
    },
    [edges]
  );

  return (
    <Layout location={props.location} title={siteTitle} rss={true}>
      <SEO
        title={"Packages"}
        description={"RxJS community packages"}
        image={"/reactivex-card.png"}
      />
      <Bio />
      {<Search onSearch={onSearch} />}
      {packages.length === 0 && <NoMatch />}
      {packages.map(({ node }) => {
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
                <Details frontmatter={node.frontmatter} />
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
            moreAuthors
            moreAuthorGitHubs
            packageGitHub
          }
        }
      }
    }
  }
`;
