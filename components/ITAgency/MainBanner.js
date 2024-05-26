import React from "react";

const MainBanner = () => {
  return (
    <>
      <div id="home" className="agency-banner-area jarallax">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="agency-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  Our Agency Managed IT Support Solves Your Business Challenges
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  dignissimos distinctio non incidunt dolorum qui aspernatur,
                  repellat mollitia maiores
                </p>

                <div
                  className="social-link"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  <span>Follow us:</span>
                  <ul>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="agency-banner-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <img
                  src="/images/agency/banner/agency-banner-img.png"
                  alt="Image"
                />
                <div className="banner-img-shape">
                  <img
                    src="/images/agency/banner/agency-banner-img-shape.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-bottom-shape">
          <img
            src="/images/agency/banner/agency-banner-bottom-shape.png"
            alt="Image"
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
