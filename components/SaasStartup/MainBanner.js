import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div id="home" className="saas-banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="saas-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  Esit is most powerful <span>SAAS</span> solution
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

                <Link
                  href="#"
                  className="default-btn saas-btn scroll-btn"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  Get started
                </Link>
              </div>

              <div className="saas-banner-img">
                <img
                  src="/images/saas/saas-banner-img.png"
                  alt="Image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                  data-aos-once="true"
                />

                <div className="banner-shape-1">
                  <img src="/images/saas/saas-shape.png" alt="Image" />
                </div>
                <div className="banner-shape-2">
                  <img src="/images/saas/saas-shape.png" alt="Image" />
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
