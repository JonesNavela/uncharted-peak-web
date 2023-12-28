import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <>
      <div className="services-area with-radius" style={{ paddingTop: '100px' }} id="services">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="services-section-content"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>SERVICES</span>
                <h3 style={{ color: '#14042c' }}>
                  We Provide the Best Quality <b>Services</b>
                </h3>
                {/* <p>
                  We are technology solutions providing company all over the
                  world doing over 40 years.
                </p> */}
                {/* <div className="services-section-btn">
                  <Link href="#">
                  
                    <a className="default-btn">Explore All Services</a>
                  </Link>
                </div> */}
                  {/* /services/services */}
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper services-slides"
              >
                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="#">
                        {/* /services/service-details */}
                        <a>
                          <img
                            src="../../images/services/services-1.jpg"
                            alt="webImage"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="#">
                          <a>Custom Software Development</a>
                        </Link>
                      </h3>
                      <p>
                      End-to-end development of bespoke software solutions, including web applications, mobile apps, and enterprise software.
                      </p>
                      {/* <Link href="#">
                        <a className="services-btn">View More</a>
                      </Link> */}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="#">
                        <a>
                          <img
                            src="../../images/services/services-2.jpg"
                            alt="webImage"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="#">
                          <a>UI/UX Design</a>
                        </Link>
                      </h3>
                      <p>
                      User-centric and visually appealing interface design to enhance user experience and drive engagement.
                      </p>
                      <br />
                        <br />
                      {/* <Link href="#">
                        <a className="services-btn">View More</a>
                      </Link> */}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="#">
                        <a>
                          <img
                            src="../../images/services/services-3.jpg"
                            alt="webImage"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="#">
                          <a>Software Maintenance and Support</a>
                        </Link>
                      </h3>
                      <p>
                      Ongoing support and maintenance services to ensure software remains up-to-date, secure, and optimized.
                      </p>
                      <br />
                      {/* <Link href="#">
                        <a className="services-btn">View More</a>
                      </Link> */}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="#">
                        <a>
                          <img
                            src="../../images/services/services-4.jpg"
                            alt="webImage"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="#">
                          <a>Consulting and Prototyping</a>
                        </Link>
                      </h3>
                      <p>
                      Expert consulting to help businesses ideate and conceptualize software projects, along with rapid prototyping to validate ideas.
                      </p>
                      {/* <Link href="#">
                        <a className="services-btn">View More</a>
                      </Link> */}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
