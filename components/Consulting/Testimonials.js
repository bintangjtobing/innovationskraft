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
                          "Innovationskraft's team helped us develop a clear
                          growth strategy that has resulted in a significant
                          increase in our market share. Their expertise and
                          collaborative approach were invaluable."
                        </p>

                        <h3>Sarah Jones</h3>
                        <span>CEO, Tech Solutions Inc.</span>
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
                          "We were impressed by Innovationskraft's deep
                          understanding of our industry and their ability to
                          translate that knowledge into actionable solutions.
                          Their ongoing support has been instrumental in helping
                          us achieve our operational efficiency goals."
                        </p>

                        <h3>Kevin Lee</h3>
                        <span>COO, Manufacturing Giant</span>
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
