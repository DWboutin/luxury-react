import React from 'react'

const HeaderTop = () => {
  return (
    <div className="header_top header_top_four">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="header_account">
              <ul>
                <li className="language">
                  <a href="#">
                    <img src="assets/img/icon/language.png" alt="" />
                    EN
                    <i className="zmdi zmdi-chevron-down zmdi-hc-fw" />
                  </a>
                  <ul className="dropdown_language">
                    <li>
                      <a href="#">English</a>
                    </li>
                    <li>
                      <a href="#">Germany</a>
                    </li>
                  </ul>
                </li>
                <li className="currency">
                  <a href="#">
                    USD <i className="zmdi zmdi-chevron-down zmdi-hc-fw" />
                  </a>
                  <ul className="dropdown_currency">
                    <li>
                      <a href="#">EUR – Euro</a>
                    </li>
                    <li>
                      <a href="#">GBP – British Pound</a>
                    </li>
                    <li>
                      <a href="#">INR – India Rupee</a>
                    </li>
                  </ul>
                </li>
                <li className="top_links">
                  <a href="#">
                    My Account{' '}
                    <i className="zmdi zmdi-chevron-down zmdi-hc-fw"></i>
                  </a>
                  <ul className="dropdown_links">
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="welcome_text text-right">
              <p>Welcome you to Ventur store! </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
