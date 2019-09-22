import React, { useEffect } from 'react'

import { niceSelectCategory } from './jquery-utils'

const HeaderMiddle = () => {
  useEffect(() => {
    niceSelectCategory()
  })

  return (
    <div className="header_middle">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="logo">
              <a href="index.html">
                <img src="assets/img/logo/logo4.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="heder_middle_right">
              <div className="search-container search_four">
                <form action="#">
                  <div className="hover_category">
                    <select
                      className="select_option"
                      name="select"
                      id="categori"
                      defaultValue="1"
                    >
                      <option value="1">All Categories</option>
                      <option value="2">Accessories</option>
                      <option value="3">Accessories & More</option>
                      <option value="4">Butters & Eggs</option>
                      <option value="5">Camera & Video </option>
                      <option value="6">Mornitors</option>
                      <option value="7">Tablets</option>
                      <option value="8">Laptops</option>
                      <option value="9">Handbags</option>
                      <option value="10">Headphone & Speaker</option>
                      <option value="11">Herbs & botanicals</option>
                      <option value="12">Vegetables</option>
                      <option value="13">Shop</option>
                      <option value="14">Laptops & Desktops</option>
                      <option value="15">Watchs</option>
                      <option value="16">Electronic</option>
                    </select>
                  </div>
                  <div className="search_box_three">
                    <input placeholder="Search product..." type="text" />
                    <button type="submit">
                      <i className="zmdi zmdi-search zmdi-hc-fw" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="header_right_info right_info_three">
                <ul>
                  <li className="header-wishlist">
                    <a href="wishlist.html">
                      <i className="zmdi zmdi-favorite-outline"></i>{' '}
                      <span className="item_count">3</span>
                    </a>
                  </li>
                  <li className="mini_cart_wrapper">
                    <a href="/">
                      <i className="zmdi zmdi-shopping-cart zmdi-hc-fw"></i>{' '}
                      <span className="item_count">2</span> $0.00{' '}
                      <i className="zmdi zmdi-chevron-down zmdi-hc-fw"></i>
                    </a>
                    <div className="mini_cart mini_cart_four">
                      <div className="cart_gallery">
                        <div className="cart_item">
                          <div className="cart_img">
                            <a href="#">
                              <img
                                src="assets/img/s-product/product.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="cart_info">
                            <a href="#">Quisque In Arcu</a>
                            <p>
                              <span> $65.00 </span> X 1
                            </p>
                          </div>
                          <div className="cart_remove">
                            <a href="#">
                              <i className="ion-android-close"></i>
                            </a>
                          </div>
                        </div>
                        <div className="cart_item">
                          <div className="cart_img">
                            <a href="#">
                              <img
                                src="assets/img/s-product/product2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="cart_info">
                            <a href="#">Donec Ac Tempus</a>
                            <p>
                              <span> $60.00 </span> X 1
                            </p>
                          </div>
                          <div className="cart_remove">
                            <a href="#">
                              <i className="ion-android-close"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mini_cart_table">
                        <div className="cart_table_border">
                          <div className="cart_total">
                            <span>Sub total:</span>
                            <span className="price">$125.00</span>
                          </div>
                          <div className="cart_total mt-10">
                            <span>total:</span>
                            <span className="price">$125.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="mini_cart_footer">
                        <div className="cart_button">
                          <a href="cart.html">View cart</a>
                        </div>
                        <div className="cart_button">
                          <a href="checkout.html"> Checkout</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMiddle
