import { css } from "@emotion/core";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { rhythm } from "../utils/typography";

const layoutStyles = css`
  @media (max-width: 672px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const Layout = (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );
  const { location, title, children, copyright = false, rss = false } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h3
        style={{
          marginBottom: rhythm(1),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      css={layoutStyles}
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{ display: "flex", justifyContent: "space-between" }}>
        {copyright && (
          <span>
            © {new Date().getFullYear()}
            {` `}
            {site.siteMetadata.author}
            {` `}
            All&nbsp;Rights&nbsp;Reserved
          </span>
        )}
        {rss && (
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/rss.xml`}
          >
            RSS
          </Link>
        )}
      </footer>
    </div>
  );
};

export default Layout;
