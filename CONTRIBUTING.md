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

  Note that if the package is scoped, it's important that scoped name is specified in the `title`, as it will be used to build an npm link. For example:

        title: "@rx-angular/state"

- Create an `index.md` file in the directory and add the following frontmatter:

        ---
        title: "<package name>"
        description: <description>
        author: "<author's full name>"
        authorGitHub: "<author's GitHub handle>"
        packageGitHub: "<author's GitHub handle>/<repo name>"
        date: "<current date in ISO format>"
        categories: []
        keywords: []
        ---

  For packages that have multiple authors, more names and GitHub handles can be added to the using `moreAuthors` and `moreAuthorGitHubs` properties.

        ---
        author: "<author one's full name>"
        authorGitHub: "<author one's GitHub name>"
        moreAuthors: ["<author two's full name>"]
        moreAuthorGitHubs: ["<author two's GitHub handle>"]
        ---

- Add markup content to the `index.md`. You might want to add only a brief description of what the package does, along with a link to the `README.md` in GitHub.

  If you do want to add more content - examples, etc. - the site supports syntax-highlighted, language-specific code snippets. Contributors are welcome to add as much content as they see fit. The reason for most entries containing little more than a link to the `README.md` file is that I didn't want to copy content from the packages, as that would impose a burden on the package author(s) - i.e. they might feel like the content should be kept in sync.

  If you do add additional content, please refrain from adding links to sites other than GitHub and npm. PRs seeking to add markdown content that links to sites other than GitHub and npm will be rejected.
