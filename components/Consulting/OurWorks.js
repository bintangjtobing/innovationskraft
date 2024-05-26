import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const OurWorks = () => {
  return (
    <>
      <div id="our-works" className="consultancy-area ptb-100">
        <div className="container">
          <div
            className="section-title white-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <h2>See what we do</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              facere quae placeat fuga cupiditate iusto nobis consectetur eius
              deserunt. Molestias architecto culpa officia exercitationem
            </p>
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
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="project-slider"
          >
            <SwiperSlide>
              <div className="project-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/consulting/consulting-project1.jpg"
                    alt="Image"
                  />
                </a>

                <div className="project-content">
                  <span>Consulting</span>
                  <a href="#" target="_blank">
                    <h3>Business planing</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/consulting/consulting-project2.jpg"
                    alt="Image"
                  />
                </a>

                <div className="project-content">
                  <span>Consulting</span>
                  <a href="#" target="_blank">
                    <h3>Software planing</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/consulting/consulting-project3.jpg"
                    alt="Image"
                  />
                </a>

                <div className="project-content">
                  <span>Consulting</span>
                  <a href="#" target="_blank">
                    <h3>IT planing</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/consulting/consulting-project4.jpg"
                    alt="Image"
                  />
                </a>

                <div className="project-content">
                  <span>Consulting</span>
                  <a href="#" target="_blank">
                    <h3>App planing</h3>
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

export default OurWorks;
