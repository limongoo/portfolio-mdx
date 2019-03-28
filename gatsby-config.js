module.exports = {
    siteMetadata: {
        title: `Ivan Limongan — Work Board`,
    },
    plugins:[
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options:{
                name: `posts`,
                path: `${__dirname}/src/posts/`
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options:{
                pathToConfigModule: `src/utils/typography.js`
            }
        },
        `gatsby-plugin-emotion`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-mdx`,
            options: {
              defaultLayouts: {
                posts: require.resolve("./src/components/layout.js"),
                default: require.resolve("./src/components/layout.js")
              }
            }
        },
        
    ]
}