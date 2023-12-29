import React from "react";
// import Image from 'next/image'


const Footer = () => {
  return (
    <>
      <footer className="footer-area with-black-background pt-100" id="contactus">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="sidebar-contact-info">
                <h3>Contact Information</h3>

                <ul className="info-list quick-links">
                  <li>
                    <i className="ri-phone-fill"></i>{" "}
                    <a href="tel:0747036831">+27-74-703-6831</a>
                  </li>

                  <li>
                    <i className="ri-mail-line"></i>{" "}
                    <a href="mailto:info@unchartedpeak.co.za">info@unchartedpeak.co.za</a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i>{" "}
                    <a>WeWorks Office,
                    Sandton</a>
                  </li>
                </ul>
              </div>

              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <h3>Links</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/projects">
                      <a>Projects</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <h3>Pages</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">
                      <a>Terms of Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <h3>Subscribe Newsletter</h3>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                  />

                  <button type="submit" className="default-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                &copy; Developed by {' '}
                <a
                  href="https://unchartedpeak.co.za"
                  target="_blank"
                  rel="noreferrer"
                >
                  Uncharted Peak
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="footer-shape-1">
          <img src="../../images/footer/footer-shape-1.png" alt="webImage" />
        </div>
        <div className="footer-shape-2">
          <img src="../../images/footer/footer-shape-2.png" alt="webImage" />
        </div>
        <div className="footer-shape-3">
          <img src="../../images/footer/footer-shape-3.png" alt="webImage" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
