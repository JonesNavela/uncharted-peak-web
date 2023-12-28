import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import { Autoplay } from "swiper";
import demImage from "../../images/home-slides/slides-shape-1.png";
import demImage2 from "../../images/home-slides/slides-shape-2.png";
import demImage3 from "../../images/home-slides/slides-shape-3.png";
import demImage4 from "../../images/home-slides/slides-shape-4.png";
import demImage5 from "../../images/home-slides/slides-shape-5.png";

const HeroSlider = () => {
  return (
    <>
      <div className="main-slides-area" id="about">
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="mySwiper home-slides"
        >
          <SwiperSlide>
            <div className="main-slides-item" id="getStarted">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="main-slides-content">
                      <span
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        WE ARE A CUTTING-EDGE SOFTWARE DEVELOPMENT STARTUP
                      </span>
                      <h1
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        Providing tailor-made software
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        Committed to delivering high-quality software products that empower and drive your success.
                      </p>

                      {/* <div
                        className="slides-btn"
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <Link href="#getStarted">
                          <a className="default-btn">
                            Get Started
                          </a>
                        </Link>
                      </div> */}
                    </div>
                  </div>

                  <div
                    className="col-lg-5 col-md-12"
                    data-aos="fade-down"
                    data-aos-delay="70"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <div className="main-slides-shape-1">
                      <img src={demImage} alt="test!!!!!!"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Shape Images */}
        <div className="main-slides-shape-1">
          <img 
            src={demImage}
            alt="webImage" 
            // width="100%" height="100%"
          />
        </div>
        <div className="main-slides-shape-2">
          <img 
            src={demImage2}
            alt="webImage" 
            // width="100%" height="100%"
          />
        </div>
        <div className="main-slides-shape-3">
          <img 
            src={demImage3}
            alt="webImage" 
            // width="100%" height="100%"
          />
        </div>
        <div className="main-slides-shape-4">
          <img 
            src={demImage4}
            alt="webImage" 
            // width="100%" height="100%"
          />
        </div>
        <div className="main-slides-shape-5">
          <img 
            src={demImage5}
            alt="webImage" 
            // width="100%" height="100%"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
