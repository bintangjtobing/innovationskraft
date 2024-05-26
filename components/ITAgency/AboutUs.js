import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const AboutUs = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/bk7McNUjWgw?si=X3OlSAa4-pQUPsFn",
        ]}
      />

      <div id="about-us" className="about-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <img src="/images/agency/agency-about1.png" alt="Image" />

                <div className="video-button">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="bx bx-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <span className="top-title">Our Story</span>
                <h2>
                  By Using Technology, We Have Helped Many Different Companies
                  to Grow Their Business Across The World.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida risus commodo viverra
                  consectetur adipiscing elit, sed do eiusmod.
                </p>

                <p>
                  maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis consectetur adipiscing elit, sed
                  do.
                </p>

                <ul>
                  <li>
                    Dale L. Goldstone
                    <span>CEO At Fast</span>
                  </li>
                  <li>
                    <img
                      src="/images/agency/agency-signature.png"
                      alt="Image"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
