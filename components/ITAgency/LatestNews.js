import React from "react";

const LatestNews = () => {
  return (
    <>
      <div id="blog" className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our blog</span>
            <h2>Read the latest news</h2>
          </div>

          <div className="row">
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
                    <img src="/images/agency/agency-blog1.jpg" alt="Image" />
                  </a>
                  <span className="date">August 29, 2024</span>
                </div>

                <div className="news-content">
                  <div className="admin">
                    By: <a href="#">Andrew Lawson</a>
                  </div>

                  <a href="/blog-details" target="_blank">
                    <h3>
                      Technology can help you outshine competition in 2024
                    </h3>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua consectetur adipiscing elit.
                  </p>
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
                    <img src="/images/agency/agency-blog2.jpg" alt="Image" />
                  </a>
                  <span className="date">August 28, 2024</span>
                </div>

                <div className="news-content">
                  <div className="admin">
                    By: <a href="#">Gabriel Marini</a>
                  </div>

                  <a href="/blog-details" target="_blank">
                    <h3>
                      Does your business have the best IT set-up for success?
                    </h3>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua consectetur adipiscing elit.
                  </p>
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
                    <img src="/images/agency/agency-blog3.jpg" alt="Image" />
                  </a>
                  <span className="date">August 27, 2024</span>
                </div>

                <div className="news-content">
                  <div className="admin">
                    By: <a href="#">Aniket Patil</a>
                  </div>

                  <a href="/blog-details" target="_blank">
                    <h3>How to use IT to improve your office culture</h3>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua consectetur adipiscing elit.
                  </p>
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
