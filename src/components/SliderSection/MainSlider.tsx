import React, { useEffect } from 'react'

import { mainOwlSlider } from './jquery-utils'

const MainSlider = () => {
  useEffect(() => {
    mainOwlSlider()
  })

  return (
    <div className="col-lg-9 col-md-12">
      <div className="slider_area owl-carousel">
        <div
          className="single_slider d-flex align-items-center"
          style={{ backgroundImage: 'url(assets/img/slider/slider7.jpg)' }}
        >
          <div className="slider_content slider_c_four style1">
            <h1>LAPTOPS </h1>
            <h2>For Education </h2>
            <p>Lorem ipsum dolor is amet in? </p>
            <a className="button" href="shop.html">
              shop Now <i className="zmdi zmdi-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div
          className="single_slider d-flex align-items-center"
          style={{ backgroundImage: 'url(assets/img/slider/slider8.jpg)' }}
        >
          <div className="slider_content slider_c_four style2">
            <h1>Portable Stereo Headphones </h1>
            <h2>MDR-S40</h2>
            <p>Slim & Foldable</p>
            <a className="button" href="shop.html">
              shop Now <i className="zmdi zmdi-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSlider
