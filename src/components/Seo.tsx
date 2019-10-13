import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

import { SeoProps } from '../models/components/Seo'

function SEO({ description, lang, keywords, title }: SeoProps) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `locale`,
                content: 'en'
              },
              {
                name: `description`,
                content: data.site.siteMetadata.description
              },
              {
                property: `og:title`,
                content: data.site.siteMetadata.title
              },
              {
                property: `og:site_name`,
                content: 'Luxury smoke and vape'
              },
              {
                property: `og:image`,
                content: `${process.env.SITE_URL}/img/image.jpg`
              },
              {
                property: `og:url`,
                content: process.env.SITE_URL
              },
              {
                property: `og:image:width`,
                content: 2500
              },
              {
                property: `og:image:height`,
                content: 1600
              },
              {
                property: `og:locale`,
                content: 'en_us'
              },
              {
                property: `og:description`,
                content: data.site.siteMetadata.description
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: data.site.siteMetadata.title
              },
              {
                name: `twitter:image`,
                content: `${process.env.SITE_URL}/img/image.jpg`
              },
              {
                name: `twitter:description`,
                content: data.site.siteMetadata.description
              },
              {
                name: `dc.description`,
                lang: 'en',
                content: data.site.siteMetadata.description
              },
              {
                name: `dc.format`,
                scheme: 'IMT',
                content: 'text/html'
              },
              {
                name: `dc.identifier`,
                content: '/meta-tags/dublin/'
              },
              {
                name: `dc.source`,
                content: '/meta-tags/'
              },
              {
                name: `dc.title`,
                content: data.site.siteMetadata.title
              },
              {
                name: `dc.language`,
                content: 'en'
              },
              {
                name: `dc.coverage`,
                content: 'United-States'
              }
            ]}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
