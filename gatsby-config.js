module.exports = {
  siteMetadata: {
    title: 'Arthur Morisson | Création de sites internet à Lorient',
    author: 'Arthur Morisson',
    description: 'A Gatsby.js V2 based on Dimension by Pixelarity'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '245kysz4vrer',
        accessToken: '52b7fd1c8f4d6871ba5af53db1079a844c387b6143cb9773083812e6097ec263'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Arthur',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.svg' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ]
}
