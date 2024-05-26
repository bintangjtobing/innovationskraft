import React from "react";

const AboutUs = () => {
  return (
    <>
      <div id="about-us" className="consulting-about-area pt-70 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="consulting-about-content">
                <span>Who we are</span>
                <h3>Innovatiónskraft: Bali's Premier IT Solutions Partner</h3>
                <p>
                  At Innovatiónskraft, we believe that technology is the key to
                  growth and success. As Bali's leading IT solutions provider,
                  we offer a comprehensive suite of services tailored to meet
                  the unique needs of businesses of all sizes.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="consulting-about-img">
                <img
                  src="/images/consulting/consulting-about1.jpg"
                  alt="Image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  data-aos-once="true"
                />

                <div className="shape">
                  <img
                    src="/images/consulting/consulting-shape.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
