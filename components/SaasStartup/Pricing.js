import React, { Component } from "react";
import Link from "next/link";

export default class Pricing extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className += " fadeInUp animated";
    evt.currentTarget.className += "current";
  };
  render() {
    return (
      <>
        <div
          id="pricing"
          className="pricing-area saas-pricing-area pt-100 pb-70"
        >
          <div className="container">
            <div
              className="section-title saas-title"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <h2>Choose yearly plan</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div
              className="tab"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="row">
                <div className="col-12">
                  <div className="price-tab">
                    <ul className="tabs">
                      <li
                        className="current"
                        onClick={(e) => this.openTabSection(e, "tab1")}
                      >
                        Monthly
                      </li>
                      <li onClick={(e) => this.openTabSection(e, "tab2")}>
                        Yearly
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12">
                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                          <div className="single-pricing">
                            <h3>Basic plan</h3>

                            <div className="price">
                              <h2>$29</h2>
                              <span>Per Month</span>
                            </div>

                            <ul>
                              <li>10 Pages responsive website</li>
                              <li>50 SEO keywords</li>
                              <li>24x7 Great support</li>
                              <li>Customer service</li>
                            </ul>

                            <Link href="#" className="default-btn">
                              Read more
                            </Link>
                          </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                          <div className="single-pricing active">
                            <h3>Ultra plan</h3>

                            <div className="price">
                              <h2>$49</h2>
                              <span>Per Month</span>
                            </div>

                            <ul>
                              <li>30 Pages responsive website</li>
                              <li>50 SEO keywords</li>
                              <li>24x7 Great support</li>
                              <li>Customer service</li>
                            </ul>

                            <Link href="#" className="default-btn">
                              Read more
                            </Link>

                            <p>Popular</p>
                          </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                          <div className="single-pricing">
                            <h3>Enterprise plan</h3>

                            <div className="price">
                              <h2>$79</h2>
                              <span>Per Month</span>
                            </div>

                            <ul>
                              <li>50 Pages responsive website</li>
                              <li>50 SEO keywords</li>
                              <li>24x7 Great support</li>
                              <li>Customer service</li>
                            </ul>

                            <Link href="#" className="default-btn">
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="tab2" className="tabs_item">
                      <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                          <div className="single-pricing">
                            <h3>Basic plan</h3>

                            <div className="price">
                              <h2>$39</h2>
                              <span>Per yearly</span>
                            </div>

                            <ul>
                              <li>20 Pages responsive website</li>
                              <li>50 SEO keywords</li>
                              <li>24x7 Great support</li>
                              <li>Customer service</li>
                            </ul>

                            <Link href="#" className="default-btn">
                              Read more
                            </Link>
                          </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                          <div className="single-pricing active">
                            <h3>Ultra plan</h3>

                            <div className="price">
                              <h2>$79</h2>
                              <span>Per yearly</span>
                            </div>

                            <ul>
                              <li>40 Pages responsive website</li>
                              <li>50 SEO keywords</li>
                              <li>24x7 Great support</li>
                              <li>Customer service</li>
                            </ul>

                            <Link href="#" className="default-btn">
                              Read more
                            </Link>

                            <p>Popular</p>
                          </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                          <div className="single-pricing">
                            <h3>Enterprise plan</h3>

                            <div className="price">
                              <h2>$99</h2>
                              <span>Per yearly</span>
                            </div>

                            <ul>
                              <li>70 Pages responsive website</li>
                              <li>50 SEO keywords</li>
                              <li>24x7 Great support</li>
                              <li>Customer service</li>
                            </ul>

                            <Link href="#" className="default-btn">
                              Read more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
