import React from "react";

const LatestNews = () => {
  return (
    <>
      <div id="blog" className="blog-area consulting-blog-area pt-100 pb-70">
        <div className="container">
          <div
            className="section-title consulting-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <h2>Read the latest news</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="blog-img">
                  <a href="/blog-details" target="_blank">
                    <img
                      src="/images/consulting/consulting-blog1.jpg"
                      alt="Image"
                    />
                  </a>
                </div>

                <div className="news-content">
                  <div className="admin">
                    <img
                      src="/images/consulting/consulting-admin1.jpg"
                      alt="Image"
                    />
                    Post by: <a href="#">Andrew Lawson</a>
                  </div>

                  <a href="/blog-details" target="_blank">
                    <h3>How to become a consultant</h3>
                  </a>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua consectetur adipiscing elit.
                  </p>

                  <span>August 29, 2024</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="blog-img">
                  <a href="/blog-details" target="_blank">
                    <img
                      src="/images/consulting/consulting-blog2.jpg"
                      alt="Image"
                    />
                  </a>
                </div>

                <div className="news-content">
                  <div className="admin">
                    <img
                      src="/images/consulting/consulting-admin2.jpg"
                      alt="Image"
                    />
                    Post by:{" "}
                    <a href="#" className="admin">
                      Gabriel Marini
                    </a>
                  </div>

                  <a href="/blog-details" target="_blank">
                    <h3>Marketing for consultants study</h3>
                  </a>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua consectetur adipiscing elit.
                  </p>

                  <span>August 28, 2024</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="blog-img">
                  <a href="/blog-details" target="_blank">
                    <img
                      src="/images/consulting/consulting-blog3.jpg"
                      alt="Image"
                    />
                  </a>
                </div>

                <div className="news-content">
                  <div className="admin">
                    <img
                      src="/images/consulting/consulting-admin3.jpg"
                      alt="Image"
                    />
                    Post by:{" "}
                    <a href="#" className="admin">
                      Aniket Patil
                    </a>
                  </div>

                  <a href="/blog-details" target="_blank">
                    <h3>Grow your consulting business</h3>
                  </a>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua consectetur adipiscing elit.
                  </p>

                  <span>August 27, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
