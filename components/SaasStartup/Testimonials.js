import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <div className="saas-testimonial-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-title">
                <span>Testimonials</span>
                <h2>Check what’s our client say about our SaaS startup</h2>
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
                className="saas-testimonial-slider"
              >
                <SwiperSlide>
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa repellendus alias libero dolor aspernatur incidunt
                      omnis veritatis ipsa fuga labore excepturi iste illum
                      quos, consequatur sed aliquam, quasi delectus magnam ipsum
                      dolor sit amet consectetur adipisicing elit. Culpa
                      repellendus alias libero dolor.
                    </p>

                    <h3>Richard Miles</h3>
                    <span>Chairman</span>

                    <i className="flaticon-quotation quotes-icon"></i>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa repellendus alias libero dolor aspernatur incidunt
                      omnis veritatis ipsa fuga labore excepturi iste illum
                      quos, consequatur sed aliquam, quasi delectus magnam ipsum
                      dolor sit amet consectetur adipisicing elit. Culpa
                      repellendus alias libero dolor.
                    </p>

                    <h3>Richard Miles</h3>
                    <span>Chairman</span>
                    <i className="flaticon-quotation quotes-icon"></i>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa repellendus alias libero dolor aspernatur incidunt
                      omnis veritatis ipsa fuga labore excepturi iste illum
                      quos, consequatur sed aliquam, quasi delectus magnam ipsum
                      dolor sit amet consectetur adipisicing elit. Culpa
                      repellendus alias libero dolor.
                    </p>

                    <h3>Richard Miles</h3>
                    <span>Chairman</span>

                    <i className="flaticon-quotation quotes-icon"></i>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="col-lg-6">
              <div className="saas-client-images">
                <ul>
                  <li>
                    <img
                      src="/images/saas/client1.jpg"
                      alt="Image"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="100"
                      data-aos-once="true"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/saas/client2.jpg"
                      alt="Image"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="200"
                      data-aos-once="true"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/saas/client3.jpg"
                      alt="Image"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="300"
                      data-aos-once="true"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/saas/client4.jpg"
                      alt="Image"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="400"
                      data-aos-once="true"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/saas/client5.jpg"
                      alt="Image"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="500"
                      data-aos-once="true"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/saas/client6.jpg"
                      alt="Image"
                      data-aos="fade-in"
                      data-aos-duration="800"
                      data-aos-delay="600"
                      data-aos-once="true"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-bg">
          <img src="/images/saas/saas-testimonial-bg.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
