import React, { useEffect } from 'react'

import ProductCard from './commons/ProductCard'
import { productListingSlider } from './ProductListing/jquery-utils'

const ProductListing = () => {
  useEffect(() => {
    productListingSlider()
  })

  return (
    <div className="product_area product_style4 color_three mb-70">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_title section_title_style4">
              <h2>Our Products</h2>
            </div>
          </div>
        </div>
        <div className="product_carousel4 product_column4 owl-carousel">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default ProductListing
