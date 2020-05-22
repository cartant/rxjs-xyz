/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { rhythm } from "../utils/typography";

const linkImagesStyles = css`
  display: inline-flex;
  a {
    box-shadow: none;
    margin-left: ${rhythm(0.5)};
  }
  a:first-of-type {
    margin-left: 0;
  }
  img {
    height: 16px;
    width: 16px;
  }
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/reactivex.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          description
          social {
            gitHub
            twitter
          }
        }
      }
    }
  `);

  const { author, description, social } = data.site.siteMetadata;

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: 0,
      }}
    >
      <a href={`/`} style={{ boxShadow: "none", textDecoration: "none" }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
            marginBottom: 0,
          }}
        />
      </a>
      <p style={{ margin: 0 }}>
        {description}
        <br />
        <span css={linkImagesStyles}>
          <a href={`https://github.com/${social.gitHub}`}>
            <img src="/github.svg" alt="GitHub" />
          </a>
          <a href={`https://twitter.com/${social.twitter}`}>
            <img src="/twitter.svg" alt="Twitter" />
          </a>
        </span>
      </p>
    </div>
  );
};

export default Bio;
