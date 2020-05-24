# Repo structure

This repo contains the Gatsby source for a blog-like site. It was adapted from the Gastby source for my personal site: [ncjamieson.com](http://ncjamieson.com).

- The `blog-post` template has been replaced with a `package` template.
- The `content/blog` directory has been renamed to `content/packages`.
- The site metadata and the frontmatter has been tweaked to better fit this site's needs.

# Adding a package

To add a user-land package to the site, open a PR that:

- Creates a directory under `content/packages` that has the same name as the npm package. Scoped packages should be placed in a directory that has the scope and package names separated by two underscores - this is the same name mangling mechanism that's used with TypeScript's `@types` packages.

  For example, content for:

        @rx-angular/state

  would be placed in a directory named:

        rx-angular__state

- Create an `index.md` file in the directory and add the following frontmatter:

        ---
        title: "<package name>"
        description: <description>
        author: "<author's full name>"
        authorGitHub: "<author's GitHub name>"
        packageGitHub: "<author's GitHub name>/<repo name>"
        date: "<current date in ISO format>"
        categories: []
        keywords: []
        ---

- Add markup content to the `index.md`. You might want to add only a brief description of what the package does, along with a link to the `README.md` in GitHub.

  If you do want to add more content - examples, etc. - the site supports syntax-highlighted, language-specific code snippets.

  If you do add additional content, please refrain from adding links to sites other than GitHub and npm. PRs seeking to add markdown content that links to sites other than GitHub and npm will be rejected.
