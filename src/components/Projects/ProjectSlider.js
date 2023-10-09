import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
// import Image from 'next/image'

const ProjectSlider = () => {
  return (
    <>
      <div className="projects-area with-black-background" style={{ paddingTop: '100px' }}>
        <div className="container-fluid">
          <div className="section-title">
            <span>PROJECTS</span>
            <h2 style={{ color: '#14042c' }}>
              Our Latest <b>Incredible</b> Client&apos;s Projects
            </h2>
          </div>

          <div className="px-3 text-center">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
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
                1200: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper projects-slides"
            >
              <SwiperSlide>
                <div
                  className="projects-item text-start"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="projects-image">
                    {/* /projects/projects-details */}
                    <Link href="#">
                      <a>
                        <img
                          src="../../images/projects/projects-1.jpg"
                          alt="webImage"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="#">
                        <a>Hospital Appointment Software</a>
                      </Link>
                    </h3>
                    <Link href="#">
                      <a className="projects-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="projects-item text-start"
                  data-aos="fade-up"
                  data-aos-delay="60"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  <div className="projects-image">
                    <Link href="#">
                      <a>
                        <img
                          src="../../images/projects/projects-2.jpg"
                          alt="webImage"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link nk href="#">
                        <a>School Registration Software</a>
                      </Link>
                    </h3>
                    <Link href="#">
                      <a className="projects-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="projects-item text-start"
                  data-aos="fade-up"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <div className="projects-image">
                    <Link href="#">
                      <a>
                        <img
                          src="../../images/projects/projects-3.jpg"
                          alt="webImage"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="#">
                        <a>Gardening Services Software</a>
                      </Link>
                    </h3>
                    <Link href="#">
                      <a className="projects-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="projects-item text-start"
                  data-aos="fade-up"
                  data-aos-delay="90"
                  data-aos-duration="900"
                  data-aos-once="true"
                >
                  <div className="projects-image">
                    <Link href="#">
                      <a>
                        <img
                          src="../../images/projects/projects-5.jpg"
                          alt="webImage"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="#">
                        <a>1Mil Hospital Mobile Software</a>
                      </Link>
                    </h3>
                    <Link href="#">
                      <a className="projects-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="projects-item text-start"
                  data-aos="fade-up"
                  data-aos-delay="90"
                  data-aos-duration="900"
                  data-aos-once="true"
                >
                  <div className="projects-image">
                    <Link href="#">
                      <a>
                        <img
                          src="../../images/projects/projects-5.jpg"
                          alt="webImage"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="#">
                        <a>Fx Blueprint Web Application</a>
                      </Link>
                    </h3>
                    <Link href="https://fxblueprint.co.za">
                      <a className="projects-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="projects-item text-start"
                  data-aos="fade-up"
                  data-aos-delay="90"
                  data-aos-duration="900"
                  data-aos-once="true"
                >
                  <div className="projects-image">
                    <Link href="#">
                      <a>
                        <img
                          src="../../images/projects/projects-5.jpg"
                          alt="webImage"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="#">
                        <a>5 Loaves 2 Fish Web Application</a>
                      </Link>
                    </h3>
                    <Link href="#">
                      <a className="projects-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Shape Images */}
        <div className="projects-bg-shape-1">
          <img src="../../images/projects/projects-bg-shape.png" alt="webImage" />
        </div>
        <div className="projects-shape-1">
          <img src="../../images/projects/projects-shape-1.png" alt="webImage" />
        </div>
        <div className="projects-shape-2">
          <img src="../../images/projects/projects-shape-2.png" alt="webImage" />
        </div>
        <div className="projects-shape-3">
          <img src="../../images/projects/projects-shape-3.png" alt="webImage" />
        </div>
      </div>
    </>
  );
};

export default ProjectSlider;
