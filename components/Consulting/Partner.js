import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Partner = () => {
  return (
    <>
      <div className="partner-area consulting-partner-area pt-100 pb-80">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div
            className="section-title consulting-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <h2>Our Clients</h2>
            <p>
              At Innovationskraft, we are proud to partner with a diverse range
              of leading companies across various industries. We are committed
              to helping our clients achieve their strategic objectives and
              drive sustainable growth through our comprehensive consulting
              services.
            </p>
          </div>
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
                  <img
                    src="/images/partner/5d90b513b6.png"
                    alt="Innovationskraft client 1"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/belanjasemua.png"
                    alt="Innovationskraft client 2"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/cargill.svg"
                    alt="Innovationskraft client 3"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/euroupvc.png"
                    alt="Innovationskraft client 4"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/ff79021cf5.png"
                    alt="Innovationskraft client 5"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/indotech.png"
                    alt="Innovationskraft client 6"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/Infinity Solutions.png"
                    alt="Innovationskraft client 7"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/jonihendricenter.png"
                    alt="Innovationskraft client 8"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/Logo BTSA.png"
                    alt="Innovationskraft client 9"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/makustik.svg"
                    alt="Innovationskraft client 10"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/PKLS.png"
                    alt="Innovationskraft client 11"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/Plpestindo.png"
                    alt="Innovationskraft client 12"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/partner/Screenshot 2023-07-21 111847.png"
                    alt="Innovationskraft client 13"
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
