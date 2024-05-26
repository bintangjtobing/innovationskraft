import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div
        id="pricing"
        className="pricing-area consulting-pricing-area pt-100 pb-70"
      >
        <div className="container">
          <div
            className="section-title consulting-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <h2>Our Transparance Consulting Packages & Pricing</h2>
            <p>
              Innovationskraft offers a comprehensive range of consulting
              services designed to help businesses of all sizes achieve their
              strategic objectives. Our experienced team specializes in
              providing tailored solutions in the areas of business consulting,
              web app development, and customer experience (CX) design.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-pricing">
                <div className="price">
                  <i className="flaticon-chart"></i>
                  <span>Business Consulting</span>
                </div>

                <ul>
                  <li>Market research & competitor analysis</li>
                  <li>Business strategy development</li>
                  <li>Financial modeling & forecasting</li>
                  <li>Operational efficiency improvement</li>
                  <li>Up to 10 hours of consulting time</li>
                  <li>Monthly progress reports</li>
                </ul>

                <div className="prices">
                  <h2>$699</h2>
                  <span>Per Project</span>
                </div>

                <Link href="#" className="default-btn">
                  Read more
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-pricing active">
                <div className="price">
                  <i className="flaticon-code"></i>
                  <span>Web App Development</span>
                </div>

                <ul>
                  <li>Custom web app design & development</li>
                  <li>Responsive and user-friendly interfaces</li>
                  <li>Secure and scalable infrastructure</li>
                  <li>Post-launch maintenance & support</li>
                  <li>Up to 20 hours of development time</li>
                  <li>Quarterly progress reports & demos</li>
                </ul>

                <div className="prices">
                  <h2>$1,299</h2>
                  <span>Per Project</span>
                </div>

                <Link href="#" className="default-btn">
                  Read more
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-pricing">
                <div className="price">
                  <i className="flaticon-smile"></i>
                  <span>CX Design</span>
                </div>

                <ul>
                  <li>User journey mapping & persona development</li>
                  <li>Usability testing & optimization</li>
                  <li>Customer satisfaction surveys & analysis</li>
                  <li>CX strategy development & implementation</li>
                  <li>Up to 15 hours of design time</li>
                  <li>Bi-monthly progress reports & recommendations</li>
                </ul>

                <div className="prices">
                  <h2>$299</h2>
                  <span>Per Project</span>
                </div>

                <Link href="#" className="default-btn">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="shape">
          <img src="/images/consulting/consulting-shape.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default Pricing;
