import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const OurWorks = () => {
  return (
    <>
      <div id="our-works" className="case-area pt-70 pb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span>Case study</span>
            <h2>We develop technology solutions</h2>
          </div>

          <Swiper
            spaceBetween={60}
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
            className="case-slider"
          >
            <SwiperSlide>
              <div className="single-case">
                <a href="#" target="_blank">
                  <img src="/images/agency/agency-work1.jpg" alt="Image" />
                </a>

                <div className="case-content">
                  <a href="#" target="_blank">
                    <h3>Web development</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-case">
                <a href="#" target="_blank">
                  <img src="/images/agency/agency-work2.jpg" alt="Image" />
                </a>

                <div className="case-content">
                  <a href="#" target="_blank">
                    <h3>Business analytics</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-case">
                <a href="#" target="_blank">
                  <img src="/images/agency/agency-work3.jpg" alt="Image" />
                </a>

                <div className="case-content">
                  <a href="#" target="_blank">
                    <h3>Mobile app development</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-case">
                <a href="#" target="_blank">
                  <img src="/images/agency/agency-work4.jpg" alt="Image" />
                </a>

                <div className="case-content">
                  <a href="#" target="_blank">
                    <h3>Mobile data development</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="case-shape">
          <img src="/images/agency/agency-work-shape.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default OurWorks;
