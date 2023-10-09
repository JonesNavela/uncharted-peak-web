import React from "react";
// import Image from 'next/image'

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area" style={{ paddingTop: '100px' }} id="#getStarted">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="../../images/about/about.png"
                  alt="webImage"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>WHO WE ARE</span>
                <h3>
                  We specialize in providing <b>tailor-made</b> software
                </h3>
                <p>
                  We are committed to delivering high-quality software products that empower our clients and drive their success.
                </p>
                <p>
                  With a focus on innovation, customer satisfaction, and ethical practices, Uncharted Peak aims to become a leading player in the South African software development market. 
                </p>
                {/* <div className="about-btn">
                  <Link href="#">
                    <a className="default-btn">Know More About Us</a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1">
          <img src="../../images/about/about-shape.png" alt="webImage" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
