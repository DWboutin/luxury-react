import React from 'react'

import HotDeals from './SliderSection/HotDeals'
import MainSlider from './SliderSection/MainSlider'

const SliderSection = () => {
  return (
    <section className="slider_section slider_s_four mt-30">
      <div className="container">
        <div className="row">
          <MainSlider />
          <HotDeals />
        </div>
      </div>
    </section>
  )
}

export default SliderSection
