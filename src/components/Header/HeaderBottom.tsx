import React, { useEffect } from 'react'

import { categorySubMenuToggle } from './jquery-utils'

const HeaderBottom = () => {
  useEffect(() => {
    categorySubMenuToggle()
  })

  return (
    <div className="header_bottom sticky-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="categories_menu categories_four">
              <div className="categories_title">
                <h2 className="categori_toggle">Categories</h2>
              </div>
              <div className="categories_menu_toggle">
                <ul>
                  <li className="menu_item_children categorie_list">
                    <a href="#">
                      Electronic <i className="fa fa-angle-right"></i>
                    </a>
                    <ul className="categories_mega_menu">
                      <li className="menu_item_children">
                        <a href="#">Accessories</a>
                        <ul className="categorie_sub_menu">
                          <li>
                            <a href="">Bower</a>
                          </li>
                          <li>
                            <a href="">Flipbac</a>
                          </li>
                          <li>
                            <a href="">Gary Fong</a>
                          </li>
                          <li>
                            <a href="">GigaPan</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu_item_children">
                        <a href="#">Dresses</a>
                        <ul className="categorie_sub_menu">
                          <li>
                            <a href="">Accessories</a>
                          </li>
                          <li>
                            <a href="">2-Stroke</a>
                          </li>
                          <li>
                            <a href="">Handbag</a>
                          </li>
                          <li>
                            <a href="">Clothing</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu_item_children last_child">
                        <a href="#">Lingerie</a>
                        <ul className="categorie_sub_menu">
                          <li>
                            <a href="">Bags & Cases</a>
                          </li>
                          <li>
                            <a href="">Binoculars & Scopes</a>
                          </li>
                          <li>
                            <a href="">Film Photography</a>
                          </li>
                          <li>
                            <a href="">Lighting & Studio</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu_item_children">
                    <a href="#">
                      Fashion & Beauty <i className="fa fa-angle-right"></i>
                    </a>
                    <ul className="categories_mega_menu">
                      <li className="menu_item_children">
                        <a href="#">Chair</a>
                        <div className="categorie_sub_menu">
                          <ul>
                            <li>
                              <a href="">Dining room</a>
                            </li>
                            <li>
                              <a href="">bedroom</a>
                            </li>
                            <li>
                              <a href=""> Home & Office</a>
                            </li>
                            <li>
                              <a href="">living room</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menu_item_children">
                        <a href="#">Lighting</a>
                        <div className="categorie_sub_menu">
                          <ul>
                            <li>
                              <a href="">Ceiling Lighting</a>
                            </li>
                            <li>
                              <a href="">Wall Lighting</a>
                            </li>
                            <li>
                              <a href="">Outdoor Lighting</a>
                            </li>
                            <li>
                              <a href="">Smart Lighting</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menu_item_children">
                        <a href="#">Sofa</a>
                        <div className="categorie_sub_menu">
                          <ul>
                            <li>
                              <a href="">Fabric Sofas</a>
                            </li>
                            <li>
                              <a href="">Leather Sofas</a>
                            </li>
                            <li>
                              <a href="">Corner Sofas</a>
                            </li>
                            <li>
                              <a href="">Sofa Beds</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="menu_item_children">
                    <a href="#">
                      Camera & Photo <i className="fa fa-angle-right"></i>
                    </a>
                    <ul className="categories_mega_menu column_2">
                      <li className="menu_item_children">
                        <a href="#">Brake Tools</a>
                        <div className="categorie_sub_menu">
                          <ul>
                            <li>
                              <a href="">Driveshafts</a>
                            </li>
                            <li>
                              <a href="">Spools</a>
                            </li>
                            <li>
                              <a href="">Diesel </a>
                            </li>
                            <li>
                              <a href="">Gasoline</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menu_item_children">
                        <a href="#">Emergency Brake</a>
                        <div className="categorie_sub_menu">
                          <ul>
                            <li>
                              <a href="">Dolls for Girls</a>
                            </li>
                            <li>
                              <a href="">Girls' Learning Toys</a>
                            </li>
                            <li>
                              <a href="">Arts and Crafts for Girls</a>
                            </li>
                            <li>
                              <a href="">Video Games for Girls</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">TV & Audio</a>
                  </li>
                  <li>
                    <a href="#"> home funiture</a>
                  </li>
                  <li>
                    <a href="#">Memory Cards</a>
                  </li>
                  <li>
                    <a href="#">Living Room</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="main_menu menu_four menu_position">
              <nav>
                <ul>
                  <li>
                    <a className="active" href="index.html">
                      home<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="sub_menu">
                      <li>
                        <a href="index.html">Home shop 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home shop 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home shop 3</a>
                      </li>
                      <li>
                        <a href="index-4.html">Home shop 4</a>
                      </li>
                      <li>
                        <a href="index-5.html">Home shop 5</a>
                      </li>
                      <li>
                        <a href="index-6.html">Home shop 6</a>
                      </li>
                      <li>
                        <a href="index-7.html">Home shop 7</a>
                      </li>
                      <li>
                        <a href="index-8.html">Home shop 8</a>
                      </li>
                    </ul>
                  </li>
                  <li className="mega_items">
                    <a href="shop.html">
                      shop<i className="fa fa-angle-down"></i>
                    </a>
                    <div className="mega_menu">
                      <ul className="mega_menu_inner">
                        <li>
                          <a href="#">Shop Layouts</a>
                          <ul>
                            <li>
                              <a href="shop-fullwidth.html">Full Width</a>
                            </li>
                            <li>
                              <a href="shop-fullwidth-list.html">
                                Full Width list
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Right Sidebar{' '}
                              </a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar-list.html">
                                {' '}
                                Right Sidebar list
                              </a>
                            </li>
                            <li>
                              <a href="shop-list.html">List View</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">other Pages</a>
                          <ul>
                            <li>
                              <a href="cart.html">cart</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="my-account.html">my account</a>
                            </li>
                            <li>
                              <a href="404.html">Error 404</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Product Types</a>
                          <ul>
                            <li>
                              <a href="product-details.html">product details</a>
                            </li>
                            <li>
                              <a href="product-sidebar.html">product sidebar</a>
                            </li>
                            <li>
                              <a href="product-grouped.html">product grouped</a>
                            </li>
                            <li>
                              <a href="variable-product.html">
                                product variable
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="blog.html">
                      blog<i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="sub_menu pages">
                      <li>
                        <a href="blog-details.html">blog details</a>
                      </li>
                      <li>
                        <a href="blog-fullwidth.html">blog fullwidth</a>
                      </li>
                      <li>
                        <a href="blog-sidebar.html">blog sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      pages <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="sub_menu pages">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="services.html">services</a>
                      </li>
                      <li>
                        <a href="faq.html">Frequently Questions</a>
                      </li>
                      <li>
                        <a href="contact.html">contact</a>
                      </li>
                      <li>
                        <a href="login.html">login</a>
                      </li>
                      <li>
                        <a href="404.html">Error 404</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">about Us</a>
                  </li>
                  <li>
                    <a href="contact.html"> Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="header_social social_four  text-right">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
