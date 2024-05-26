import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Partner = () => {
  return (
    <div className="partner-area personal-partner-area pb-100">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay]}
          className="partner-slider"
        >
          <SwiperSlide>
            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/partner-logo-1.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/partner-logo-2.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/partner-logo-3.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/partner-logo-4.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/partner-logo-5.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partner-item">
              <a href="#" target="_blank">
                <img src="/images/partner/partner-logo-2.png" alt="Image" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
