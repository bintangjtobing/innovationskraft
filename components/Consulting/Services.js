import React from "react";

const Services = () => {
  return (
    <>
      <div id="services" className="consulting-services-area pt-100 pb-70">
        <div className="container">
          <div
            className="section-title consulting-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <h2>Consulting Services</h2>
            <p>
              Innovationskraft empowers businesses to thrive in the digital age
              by offering a comprehensive suite of consulting services. We
              leverage our team of experienced professionals and cutting-edge
              technology solutions to help you achieve your strategic
              objectives.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-consulting-services bg-1">
                <i className="flaticon-advertising"></i>
                <h3>Business & Digital Strategy</h3>
                <p>
                  We collaborate with you to develop a data-driven roadmap that
                  aligns with your business goals. Our experts analyze market
                  trends, competitor landscape, and your internal capabilities
                  to craft a winning strategy for the digital age.
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
              <div className="single-consulting-services bg-2">
                <i className="flaticon-competition"></i>
                <h3>Cost Transformation & Optimization</h3>
                <p>
                  We identify and eliminate cost inefficiencies across your
                  business operations. Our team utilizes process analysis,
                  automation tools, and data-driven insights to optimize your
                  cost structure and improve profitability.
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
              <div className="single-consulting-services bg-3">
                <i className="flaticon-research-and-development"></i>
                <h3>Sustainability & ESG Consulting</h3>
                <p>
                  We guide your business on the path to a sustainable future.
                  Our services include environmental impact assessment, resource
                  management strategies, and ESG (Environmental, Social, and
                  Governance) reporting solutions.
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
              <div className="single-consulting-services bg-4">
                <i className="flaticon-user-experience"></i>
                <h3>Customer Experience (CX) Design</h3>
                <p>
                  We create exceptional customer journeys that build brand
                  loyalty and drive growth. Our CX design services encompass
                  user research, persona development, journey mapping, and
                  implementation of touchpoint improvements.
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
              <div className="single-consulting-services bg-5">
                <i className="flaticon-strategy"></i>
                <h3>Business Process Improvement (BPI)</h3>
                <p>
                  We streamline your operations for enhanced efficiency and
                  productivity. Our BPI services involve process analysis,
                  workflow optimization, and implementation of automation
                  solutions to boost your operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="shape">
          <img src="/images/consulting/consulting-shape-3.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default Services;
