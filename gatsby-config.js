module.exports = {
  siteMetadata: {
    baseLanguage: 'en',
    title: 'Luxury smoke and vape - Where luxury meets quality',
    description:
      'Enter your email for a chance to win 1 of 3 $50 e-gift cards and be notified when LuxurySmokeandVape.com officially opens! Keep an eye out for upcoming deals and discounts. Opening Soon!!!',
    author: 'LuxurySmokeAndVape.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-react-intl',
        short_name: 'starter',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-typescript'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
