/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { rhythm } from "../utils/typography";

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

  const { author, description } = data.site.siteMetadata;

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
        To list an RxJS-related package,{" "}
        <a
          href="https://github.com/cartant/rxjs-xyz/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          open a PR
        </a>
      </p>
    </div>
  );
};

export default Bio;
