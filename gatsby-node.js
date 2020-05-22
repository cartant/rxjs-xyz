const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  async function createPackages() {
    const component = path.resolve(`./src/templates/package.js`);
    const result = await graphql(
      `
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `
    );

    if (result.errors) {
      throw result.errors;
    }

    // Create package pages.
    const packages = result.data.allMarkdownRemark.edges;

    packages.forEach((post, index) => {
      createPage({
        path: post.node.fields.slug,
        component,
        context: {
          slug: post.node.fields.slug,
        },
      });
    });
  }

  await createPackages();
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
