import React from 'react'

import { ProductCardProps } from '../../models/commons/ProductCard'

const ProductCard = ({ countdown }: ProductCardProps) => (
  <article className="single_product">
    <figure>
      <div className="product_thumb">
        <a className="primary_img" href="product-details.html">
          <img src="assets/img/product/product27.jpg" alt="" />
        </a>
        <a className="secondary_img" href="product-details.html">
          <img src="assets/img/product/product28.jpg" alt="" />
        </a>
        <div className="action_links">
          <ul>
            <li className="add_to_cart">
              <a href="cart.html" title="Add to cart">
                <i className="zmdi zmdi-shopping-cart"></i>
              </a>
            </li>

            <li className="wishlist">
              <a href="wishlist.html" title="Add to Wishlist">
                <i className="zmdi zmdi-favorite-outline"></i>
              </a>
            </li>

            <li className="compare">
              <a href="#" title="Add to Compare">
                <i className="zmdi zmdi-shuffle"></i>
              </a>
            </li>

            <li className="quick_button">
              <a
                href="#"
                data-toggle="modal"
                data-target="#modal_box"
                title="quick view"
              >
                {' '}
                <i className="zmdi zmdi-eye"></i>
              </a>
            </li>
          </ul>
        </div>
        {countdown && (
          <div className="product_timing">
            <div data-countdown={countdown} />
          </div>
        )}
      </div>
      <figcaption className="product_content">
        <h4 className="product_name">
          <a href="product-details.html">Mattis aptent taciti</a>
        </h4>
        <div className="product_rating">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-star" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-star" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="price_box">
          <span className="old_price">$190.00</span>
          <span className="current_price">$180.00</span>
        </div>
      </figcaption>
    </figure>
  </article>
)

export default ProductCard
