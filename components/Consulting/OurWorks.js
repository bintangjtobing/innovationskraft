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
              leading provider of comprehensive consulting services, dedicated
              to helping businesses in Bali thrive in the digital age. Our team
              of experienced professionals collaborates closely with our clients
              to understand their unique challenges and aspirations, crafting
              tailored strategies to achieve their strategic objectives.
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
                    alt="Web and App Projects on InnovationsKraft"
                  />
                </a>

                <div className="project-content">
                  <span>Web & App Development</span>
                  <a href="#" target="_blank">
                    <h3>Web and Applications Planning & Development</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/consulting/consulting-project2.jpg"
                    alt="Consulting Projects on InnovationsKraft"
                  />
                </a>

                <div className="project-content">
                  <span>Consulting</span>
                  <a href="#" target="_blank">
                    <h3>Business & Digital Strategy</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/consulting/consulting-project3.jpg"
                    alt="Business Process Projects on InnovationsKraft"
                  />
                </a>

                <div className="project-content">
                  <span>Consulting</span>
                  <a href="#" target="_blank">
                    <h3>Business Process Improvement</h3>
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="project-item">
                <a href="#" target="_blank">
                  <img
                    src="/images/consulting/consulting-project4.jpg"
                    alt="Sustainability & ESG Consulting Projects on InnovationsKraft"
                  />
                </a>

                <div className="project-content">
                  <span>Consulting</span>
                  <a href="#" target="_blank">
                    <h3>Sustainability & ESG Consulting and Seminar</h3>
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
