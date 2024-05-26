import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Works = () => {
  return (
    <>
      <div id="our-works" className="portfolio-area ptb-100">
        <div className="container-fluid">
          <div
            className="section-title personal-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <span>Our portfolio</span>
            <h2>Introduce our projects</h2>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="portfolio-slider"
          >
            <SwiperSlide>
              <div className="portfolio-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/portfolio/portfolio-work1.jpg"
                    alt="Image"
                  />
                </a>
                <div className="portfolio-content">
                  <a href="#" target="_blank">
                    <h3>App Design</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/portfolio/portfolio-work2.jpg"
                    alt="Image"
                  />
                </a>
                <div className="portfolio-content">
                  <a href="#" target="_blank">
                    <h3>Website Design</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/portfolio/portfolio-work3.jpg"
                    alt="Image"
                  />
                </a>
                <div className="portfolio-content">
                  <a href="#" target="_blank">
                    <h3>Dashboard Design</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/portfolio/portfolio-work4.jpg"
                    alt="Image"
                  />
                </a>
                <div className="portfolio-content">
                  <a href="#" target="_blank">
                    <h3>Dashboard Design</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Works;
