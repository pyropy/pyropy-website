/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const fs = require(`fs`)
const fetch = require(`node-fetch`)
const { buildClientSchema } = require(`graphql`)
const { createHttpLink } = require(`apollo-link-http`)


module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {}
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `github`,
        typeName: `GitHub`,
        createLink: () =>
          createHttpLink({
            uri: `https://api.github.com/graphql`,
            headers: {
              Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            },
            fetch,
          }),
        createSchema: async () => {
          const json = JSON.parse(fs.readFileSync(`${__dirname}/github.json`))
          return buildClientSchema(json.data)
        },
      },
    },
  ],
}