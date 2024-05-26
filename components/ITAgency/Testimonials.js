import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <div className="testimonial-area">
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h2>Check what’s our client say about our IT agency</h2>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Pagination]}
            className="testimonial-slider"
          >
            <SwiperSlide>
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="testimonial-img">
                    <img src="/images/agency/agency-client1.jpg" alt="Image" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sit voluptatum odio accusantium sunt voluptates veniam ea
                      fuga nostrum deserunt expedita saepe enim deleniti earum,
                      quibusdam magni quis nobis soluta at Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Aut eveniet ea
                      vitae, recusandae magni nisi debitis molestiae eum ab
                      accusamus alias nam distinctio fugit, dolorum, quod
                      excepturi dolores laborum deserunt quibusdam magni quis
                      nobis soluta at Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Aut eveniet.
                    </p>
                    <h3>Richard Miles</h3>
                    <span>Chairman</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="testimonial-img">
                    <img src="/images/agency/agency-client2.jpg" alt="Image" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sit voluptatum odio accusantium sunt voluptates veniam ea
                      fuga nostrum deserunt expedita saepe enim deleniti earum,
                      quibusdam magni quis nobis soluta at Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Aut eveniet ea
                      vitae, recusandae magni nisi debitis molestiae eum ab
                      accusamus alias nam distinctio fugit, dolorum, quod
                      excepturi dolores laborum deserunt quibusdam magni quis
                      nobis soluta at Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Aut eveniet.
                    </p>
                    <h3>Juhon Smith</h3>
                    <span>Developer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
