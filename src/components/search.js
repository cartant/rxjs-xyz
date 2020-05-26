/*eslint-disable jsx-a11y/control-has-associated-label*/

import { css } from "@emotion/core";
import PropTypes from "prop-types";
import React from "react";
import { useDebounce } from "react-use";
import { rhythm } from "../utils/typography";

const styles = css`
  background-color: #b30068;
  border-radius: 10px;
  color: white;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  margin-left: -1.3125rem;
  margin-right: -1.3125rem;
  padding-left: 1.3125rem;
  padding-right: 1.3125rem;
  * {
    margin-block-end: 0;
    margin-block-start: 0;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: ${rhythm(1)};
    padding: ${rhythm(1)} 0;
    width: 100%;
  }
  input {
    background-color: transparent;
    border: 1px solid rgba(255 255 255 / 30%);
    border-radius: 4px;
    color: white;
    font-size: 0.75em;
    outline: none;
    padding-bottom: 2px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 2px;
  }
  input::selection {
    background-color: rgba(0 0 0 / 30%);
  }
  input:hover {
    border-color: transparent;
    box-shadow: 0 0 1px 2px rgba(255 255 255 / 50%);
  }
  input:focus {
    border-color: transparent;
    box-shadow: 0 0 1px 2px white;
  }
  input[type="text"] {
    width: calc(100% - ${rhythm(0.5)} - 4em);
  }
  input[type="button"] {
    border: 1px solid rgba(255 255 255 / 50%);
    width: 4em;
  }
  input[type="button"]:hover {
    border-color: transparent;
    box-shadow: 0 0 1px 2px 1px 2px rgba(255 255 255 / 50%);
  }
  input[type="button"]:focus {
    border-color: transparent;
    box-shadow: 0 0 1px 2px white;
  }
  @media (max-width: 672px) {
    border-radius: 0;
  }
`;

function Search({ onSearch }) {
  const [term, setTerm] = React.useState("");
  const [debouncedTerm, setDebouncedTerm] = React.useState("");
  useDebounce(() => setDebouncedTerm(term), 400, [term]);

  React.useEffect(() => {
    const trimmedTerm = debouncedTerm.trim();
    if (window.__LUNR__ && trimmedTerm) {
      window.__LUNR__.__loaded.then((lunr) => {
        const refs = lunr.en.index.search(trimmedTerm);
        const slugs = refs.map(({ ref }) => lunr.en.store[ref].slug);
        onSearch({ slugs, term: trimmedTerm });
      });
    } else {
      onSearch({ slugs: [], term: "" });
    }
  }, [debouncedTerm, onSearch]);

  return (
    <div
      css={styles}
      onSubmit={(event) => {
        event.preventDefault();
        return false;
      }}
    >
      <form autoComplete="off">
        <input
          type="text"
          placeholder="Search for"
          value={term}
          spellCheck={false}
          onChange={(event) => setTerm(event.target.value)}
        />
        <input
          type="button"
          value="Clear"
          onClick={() => {
            setTerm("");
            setDebouncedTerm("");
          }}
        />
      </form>
    </div>
  );
}

Search.defaultProps = {};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
