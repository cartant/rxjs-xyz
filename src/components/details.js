import React, { Fragment } from "react";

function Details({ frontmatter }) {
  return (
    <Fragment>
      By{" "}
      <a href={`https://github.com/${frontmatter.authorGitHub}`}>
        {frontmatter.author}
      </a>
      {"\u2002•\u2002"}
      Added {frontmatter.date}
      {"\u2002•\u2002"}
      <a
        href={`https://github.com/${frontmatter.packageGitHub}`}
        style={{ boxShadow: "none" }}
      >
        <img
          src="/github.svg"
          alt="GitHub"
          style={{ height: "16px", margin: "0", width: "16px" }}
        />
      </a>
      <a
        href={`https://www.npmjs.com/package/${frontmatter.title}`}
        style={{ boxShadow: "none" }}
      >
        <img
          src="/npm.svg"
          alt="npm"
          style={{
            height: "16px",
            margin: "0 0 0 1em",
            width: "16px",
          }}
        />
      </a>
    </Fragment>
  );
}

export default Details;
