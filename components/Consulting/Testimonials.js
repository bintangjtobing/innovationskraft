import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <div className="consulting-testimonial-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-title">
                <span>Testimonials</span>
                <h2>Check what’s our client say about our Consulting agency</h2>
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
                className="consulting-testimonial-slider"
              >
                <SwiperSlide>
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="testimonial-img">
                        <img
                          src="/images/consulting/consulting-testimonial-1.png"
                          alt="Image"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa repellendus alias libero dolor aspernatur
                          incidunt omnis veritatis ipsa fuga labore excepturi
                          iste illum quos, consequatur sed aliquam, quasi
                          delectus magnam ipsum dolor sit amet consectetur
                          adipisicing elit. Culpa repellendus alias libero
                          dolor.
                        </p>

                        <h3>Richard Miles</h3>
                        <span>Chairman</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="testimonial-img">
                        <img
                          src="/images/consulting/consulting-testimonial-1.png"
                          alt="Image"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Culpa repellendus alias libero dolor aspernatur
                          incidunt omnis veritatis ipsa fuga labore excepturi
                          iste illum quos, consequatur sed aliquam, quasi
                          delectus magnam ipsum dolor sit amet consectetur
                          adipisicing elit. Culpa repellendus alias libero
                          dolor.
                        </p>

                        <h3>Richard Miles</h3>
                        <span>Chairman</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
