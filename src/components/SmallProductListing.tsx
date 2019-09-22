import React, { useEffect } from 'react'

import SmallProductCard from './commons/SmallProductCard'
import { smallProductListingSlider } from './SmallProductListing/jquery-utils'

const SmallProductListing = () => {
  useEffect(() => {
    smallProductListingSlider()
  })

  return (
    <div className="product_area product_style4 product_tab_style color_three mb-70">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_title section_title_style4">
              <h2>Mostview Products</h2>
            </div>
          </div>
        </div>
        <div className="product_carousel4 product_tab_column3 owl-carousel">
          <div className="product_items">
            <SmallProductCard />
            <SmallProductCard />
            <SmallProductCard />
          </div>
          <div className="product_items">
            <SmallProductCard />
            <SmallProductCard />
            <SmallProductCard />
          </div>
          <div className="product_items">
            <SmallProductCard />
            <SmallProductCard />
            <SmallProductCard />
          </div>
          <div className="product_items">
            <SmallProductCard />
            <SmallProductCard />
            <SmallProductCard />
          </div>
          <div className="product_items">
            <SmallProductCard />
            <SmallProductCard />
            <SmallProductCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallProductListing
