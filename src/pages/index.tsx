import React from 'react'
import { FormattedMessage } from 'react-intl'

import Layout from '../components/Layout'
import ProductListing from '../components/ProductListing'
import ProductWithCategoriesListing from '../components/ProductWithCategoriesListing'
import SEO from '../components/Seo'
import SliderSection from '../components/SliderSection'
import SmallProductListing from '../components/SmallProductListing'
import { PageContext } from '../models/general/PagesDefinition'

const IndexPage = ({ pageContext }: { pageContext: PageContext }) => (
  <Layout>
    <SEO
      lang={pageContext.locale}
      title="Home"
      keywords={['gatsby', 'application', 'react']}
    />
    <SliderSection />
    <ProductListing />
    <SmallProductListing />
    <ProductWithCategoriesListing />
    <h1>
      <FormattedMessage id="string1" />
    </h1>
  </Layout>
)

export default IndexPage
