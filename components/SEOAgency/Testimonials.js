import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <div className="seo-testimonial-area">
        <div className="container">
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
            className="seo-testimonial-slider"
          >
            <SwiperSlide>
              <div className="single-testimonial">
                <i className="quotes bx bxs-quote-alt-left"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate repellendus minus possimus quam cum nam,
                  aspernatur, nobis laboriosam alias nesciunt consequuntur
                  voluptatem sit placeat quasi, itaque praesentium dolores nisi
                  deleniti Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Non animi cum veniam ipsum illum deserunt quos! Iste
                  labore laudantium, reiciendis ullam vitae non atque dolor,
                  similique rem unde dicta ea!
                </p>

                <ul>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>

                <div className="testimonial-img">
                  <img src="/images/seo/seo-client1.jpg" alt="Image" />
                  <h3>Alen Meair</h3>
                  <span>Developer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonial">
                <i className="quotes bx bxs-quote-alt-left"></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate repellendus minus possimus quam cum nam,
                  aspernatur, nobis laboriosam alias nesciunt consequuntur
                  voluptatem sit placeat quasi, itaque praesentium dolores nisi
                  deleniti Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Non animi cum veniam ipsum illum deserunt quos! Iste
                  labore laudantium, reiciendis ullam vitae non atque dolor,
                  similique rem unde dicta ea!
                </p>

                <ul>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                </ul>

                <div className="testimonial-img">
                  <img src="/images/seo/seo-client2.jpg" alt="Image" />
                  <h3>Juhon Smith</h3>
                  <span>Developer</span>
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
