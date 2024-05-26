import React from "react";
import Link from "next/link";

const FooterConsulting = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="footer-area consulting-footer-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <Link href="/consulting">
                  <img
                    src="/images/consulting/justlogo-innovationskraft.png"
                    alt="Image"
                  />
                </Link>

                <p>
                  At Innovationskraft, we believe that technology is the key to
                  growth and success. As Bali's leading IT solutions provider,
                  we offer a comprehensive suite of services tailored to meet
                  the unique needs of businesses of all sizes.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact us</h3>

                <ul className="address">
                  <li>
                    <a href="#">Business consulting</a>
                  </li>
                  <li>
                    <a href="#">Marketing plans</a>
                  </li>
                  <li>
                    <a href="#">Strategic planning</a>
                  </li>
                  <li>
                    <a href="#">Solicitory consultancy</a>
                  </li>
                  <li>
                    <a href="#">Audit & evaluation</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Twitter</h3>
                <p className="twitter-text">
                  Lorem ipsum dolor sittem amet ngcing elit sed eiusmoad{" "}
                  <a href="#">www.orxy.com</a>{" "}
                </p>

                <div className="twitter">
                  <i className="flaticon-twitter"></i>
                  <span>Twitter</span>
                  <span>5 days ago</span>
                </div>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Sign up</h3>
                <p>Follow our newsletter to stay updated about agency.</p>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email address"
                    name="EMAIL"
                    required
                  />

                  <button className="send-btn" type="submit">
                    <i className="bx bx-chevron-right"></i>
                  </button>
                </form>

                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="copy-right consulting-copy-right">
        <div className="container">
          <p>
            Copyright &copy; {currentYear} Innovatións-kraft. Designed by ♡ from{" "}
            <a href="/" target="_blank">
              Innovatións-kraft Team
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterConsulting;
