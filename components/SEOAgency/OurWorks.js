import React from "react";

const OurWorks = () => {
  return (
    <>
      <div id="our-works" className="seo-work-area pt-100 pb-70">
        <div className="container">
          <div
            className="section-title seo-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span>Success work</span>
            <h2>Our case studies</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-seo-work">
                <a href="#" target="_blank">
                  <img src="/images/seo/seo-work1.jpg" alt="Image" />
                </a>

                <div className="seo-work-content">
                  <a href="#" target="_blank">
                    <h3>SEO optimization</h3>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-seo-work">
                <a href="#" target="_blank">
                  <img src="/images/seo/seo-work2.jpg" alt="Image" />
                </a>

                <div className="seo-work-content">
                  <a href="#" target="_blank">
                    <h3>Long tail SEO</h3>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-seo-work">
                <a href="#" target="_blank">
                  <img src="/images/seo/seo-work3.jpg" alt="Image" />
                </a>

                <div className="seo-work-content">
                  <a href="#" target="_blank">
                    <h3>Social media marketing</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
