import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div id="home" className="seo-banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="seo-banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    >
                      We are the leading SEO agency. We provide{" "}
                      <span>international SEO</span>
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="200"
                      data-aos-once="true"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illo dignissimos distinctio non incidunt dolorum qui
                      aspernatur, repellat mollitia maiores
                    </p>

                    <Link
                      href="#"
                      className="default-btn seo-btn"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="300"
                      data-aos-once="true"
                    >
                      Contact us
                    </Link>
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
                    <img src="/images/seo/seo-banner-img.png" alt="Image" />
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

export default MainBanner;
