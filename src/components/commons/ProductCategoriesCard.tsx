import React from 'react'

const ProductCategoriesCard = () => (
  <article className="single_product">
    <figure>
      <figcaption className="product_content">
        <h4 className="product_name">
          <a href="shop.html">Desktop Computers</a>
        </h4>
        <div className="sub_featured_categories">
          <ul>
            <li>
              <a href="#">All-in-One Computers</a>
            </li>
            <li>
              <a href="#">Business Desktops</a>
            </li>
            <li>
              <a href="#">Chromebox & Mini PCs</a>
            </li>
            <li>
              <a href="#">Gaming Desktops</a>
            </li>
          </ul>
        </div>
        <footer className="view_more">
          <a href="shop.html">
            Shop All <i className="zmdi zmdi-long-arrow-right" />
          </a>
        </footer>
      </figcaption>
      <div className="product_thumb">
        <a href="shop.html">
          <img src="assets/img/custom-p/product1.jpg" alt="" />
        </a>
      </div>
    </figure>
  </article>
)

export default ProductCategoriesCard
