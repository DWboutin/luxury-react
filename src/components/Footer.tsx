import React from 'react'

const Footer = () => {
  return (
    <footer className="footer_widgets foote_three footer_four">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="widgets_container contact_us">
                <div className="footer_logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </a>
                </div>
                <div className="footer_desc">
                  <p>
                    It is a long established fact that reader will distract by
                    the readable content of a page...
                  </p>
                </div>

                <p>
                  <span>Address:</span> 49 Park Avenue, East 58st Street, Apt.
                  50 New York NY 10025
                </p>
                <p>
                  <span>Email:</span> <a href="#">info@example.com</a>
                </p>
                <p>
                  <span>Phone:</span>{' '}
                  <a href="tel:+1250367864587">+1 250 3678 64587</a>
                </p>
                <div className="footer_social">
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
                        <i
                          className="fa fa-youtube-play"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-5">
              <div className="widgets_container widget_menu">
                <h3>Information</h3>
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Prices drop</a>
                    </li>
                    <li>
                      <a href="#">New products</a>
                    </li>
                    <li>
                      <a href="#">Best sales</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Gift Certificates</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widgets_container widget_menu">
                <h3>Customer Service</h3>
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="#">Order History</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wish List</a>
                    </li>
                    <li>
                      <a href="#">Specials</a>
                    </li>
                    <li>
                      <a href="#">Affiliate</a>
                    </li>
                    <li>
                      <a href="contact.html">Site Map</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="widgets_container widget_menu">
                <h3>My Account</h3>
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="#">Prices drop</a>
                    </li>
                    <li>
                      <a href="#">New products</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Order History</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wish List</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_link">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                <li>
                  <a href="contact.html">Site Map</a>
                </li>
                <li>
                  <a href="#">Order History</a>
                </li>
                <li>
                  <a href="wishlist.html">Wish List</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="copyright_area">
                <p>
                  Copyright &copy; 2019 <a href="#">Ventur</a> All Right
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="footer_payment text-right">
                <ul>
                  <li>
                    <a href="#">
                      <img src="assets/img/icon/paypal.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icon/paypal1.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icon/paypal2.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icon/paypal3.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icon/paypal4.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icon/paypal5.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
