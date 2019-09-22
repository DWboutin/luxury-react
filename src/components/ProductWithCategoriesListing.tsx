import React, { useEffect } from 'react'

import ProductCategoriesCard from './commons/ProductCategoriesCard'
import { productWithCategoriesListingSlider } from './ProductWithCategoriesListing/jquery-utils'

const ProductListing = () => {
  useEffect(() => {
    productWithCategoriesListingSlider()
  })

  return (
    <div className="featured_categories_area mb-70">
      <div className="container">
        <div className="row">
          <div className="categories_container categories_column2 owl-carousel">
            <div className="col-lg-4">
              <div className="categories_items">
                <ProductCategoriesCard />
                <ProductCategoriesCard />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories_items">
                <ProductCategoriesCard />
                <ProductCategoriesCard />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories_items">
                <ProductCategoriesCard />
                <ProductCategoriesCard />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories_items">
                <ProductCategoriesCard />
                <ProductCategoriesCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListing
