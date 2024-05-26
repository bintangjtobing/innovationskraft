import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const OurWorks = () => {
  return (
    <>
      <div id="our-works" className="our-work-area saas-our-work-area pt-100">
        <div className="container">
          <div
            className="section-title saas-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <h2>Some samples of our work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Pagination]}
            className="our-work-slider"
          >
            <SwiperSlide>
              <div className="work-item">
                <a href="#" target="_blank">
                  <img src="/images/saas/saas-work-img-1.jpg" alt="Image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="work-item">
                <a href="#" target="_blank">
                  <img src="/images/saas/saas-work-img-2.jpg" alt="Image" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
