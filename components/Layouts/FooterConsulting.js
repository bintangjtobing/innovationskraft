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
                    <i className="flaticon-chart"></i>{" "}
                    <a href="#">Business Consulting</a>
                  </li>
                  <li>
                    <i className="flaticon-code"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i className="flaticon-smile"></i> <a href="#">CX Design</a>
                  </li>
                  <li>
                    <i className="flaticon-envelope"></i>{" "}
                    <a href="mailto:info@innovationskraft.com">
                      info@innovationskraft.com
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-phone"></i>{" "}
                    <a href="tel:+6281262845980">+62 (812) 6284 5980</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="copy-right consulting-copy-right">
        <div className="container">
          <p>
            Copyright &copy; {currentYear} Innovationskraft™. Designed with ♡ by
            the Innovationskraft Team.
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterConsulting;
