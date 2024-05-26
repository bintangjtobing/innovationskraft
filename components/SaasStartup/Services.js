import React from "react";

const Services = () => {
  return (
    <>
      <div id="services" className="sass-services-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="services-contents">
                <span className="top-title">Our services</span>
                <h2>
                  Powerfull services offered in SAAS application development
                </h2>

                <p>
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis consectetur adipiscing elit, sed
                  do.
                </p>

                <img
                  src="/images/saas/saas-service1.png"
                  alt="Image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-lg-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  <div className="sass-single-services-box">
                    <i className="flaticon-product"></i>
                    <h3>Product engineering</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor inci didunt ut labore et dolore{" "}
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  <div className="sass-single-services-box">
                    <i className="flaticon-license"></i>
                    <h3>License management</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor inci didunt ut labore et dolore{" "}
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  <div className="sass-single-services-box">
                    <i className="flaticon-secure"></i>
                    <h3>Security design</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor inci didunt ut labore et dolore{" "}
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                  data-aos-once="true"
                >
                  <div className="sass-single-services-box">
                    <i className="flaticon-implement"></i>
                    <h3>Release planning</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor inci didunt ut labore et dolore{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
