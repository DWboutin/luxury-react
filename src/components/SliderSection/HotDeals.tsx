import React, { useEffect } from 'react'

import ProductCard from '../commons/ProductCard'
import { dealSlider, productCountdown } from './jquery-utils'

const HotDeals = () => {
  useEffect(() => {
    dealSlider()
    productCountdown()
  })

  return (
    <div className="col-lg-3 col-md-12">
      <div className="deals_sidebar_product mb-68">
        <div className="section_title section_title_style4">
          <h2> Hot deals</h2>
        </div>
        <div className="row">
          <div className="deals_carousel product_column1 owl-carousel">
            <div className="col-lg-3">
              <ProductCard countdown="2022/12/15" />
            </div>
            <div className="col-lg-3">
              <ProductCard countdown="2022/12/15" />
            </div>
            <div className="col-lg-3">
              <ProductCard countdown="2022/12/15" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotDeals
