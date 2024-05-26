import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const MainBanner = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox toggler={toggler} sources={["#"]} />

      <div id="home" className="consulting-banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="consulting-banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    >
                      Bali's Premier IT Partner: Web Apps, Design, Businesses
                      Consulting & AI Solutions
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="200"
                      data-aos-once="true"
                    >
                      In the dynamic digital landscape of Bali, Innovatiónskraft
                      stands as your trusted partner, empowering businesses to
                      thrive and transform through innovative IT solutions. We
                      are Bali's premier IT solutions provider, offering a
                      comprehensive suite of services tailored to meet the
                      unique needs of businesses of all sizes.
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
                          <a href="https://twitter.com/" target="_blank">
                            <i className="bx bxl-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://instagram.com/" target="_blank">
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://facebook.com/" target="_blank">
                            <i className="bx bxl-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com/" target="_blank">
                            <i className="bx bxl-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="consulting-banner-img"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="400"
                    data-aos-once="true"
                  >
                    <img
                      src="/images/consulting/consulting-banner-img.jpg"
                      alt="Image"
                    />

                    <div className="video-button">
                      <div
                        onClick={() => setToggler(!toggler)}
                        className="video-btn"
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-1">
          <img src="/images/consulting/consulting-shape.png" alt="Image" />
        </div>
        <div className="shape-2">
          <img src="/images/consulting/consulting-shape-2.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
