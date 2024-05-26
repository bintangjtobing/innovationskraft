import React from "react";

const Features = () => {
  return (
    <>
      <div className="consulting-feature-area">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-consulting-feature bg-1">
                <h3>Web and Mobile App Development</h3>
                <p>
                  We craft custom applications that seamlessly integrate with
                  your business processes, enhancing efficiency and
                  productivity.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-consulting-feature bg-2">
                <h3>Business Consulting and Digital Strategy</h3>
                <p>
                  Our team of experts provides comprehensive guidance on
                  leveraging technology to achieve your business objectives.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-consulting-feature bg-3">
                <h3>UI/UX Design</h3>
                <p>
                  We create user-centric designs that are both visually
                  appealing and intuitive, ensuring a seamless user experience.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="single-consulting-feature bg-4">
                <h3>Website Development</h3>
                <p>
                  We build high-performance websites that effectively
                  communicate your brand and drive conversions.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="single-consulting-feature bg-5">
                <h3>AI-powered Solutions</h3>
                <p>
                  We integrate cutting-edge AI technologies to automate tasks,
                  gain valuable insights, and make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
