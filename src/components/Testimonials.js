// import Link from "next/link";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-section-content"
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>TESTIMONIALS</span>
                <h3>
                  Some <b>Sweet Talk</b> from Our Clients
                </h3>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="testimonials-item"
                data-aos="fade-left"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="item-box">
                  <img
                    src="../../images/testimonials/testimonials-1.jpg"
                    className="rounded-circle"
                    alt="webImage"
                  />
                  <p>
                    We tasked Uncharted peak with developing our website, and it was exceptional!
                  </p>
                  <h4>
                    Paul Asaba, <span>5 Loaves 2 Fish</span>
                  </h4>
                </div>

                <div className="item-box">
                  <img
                    src="../../images/testimonials/testimonials-2.jpg"
                    className="rounded-circle"
                    alt="webImage"
                  />
                  <p>
                    Super efficient and great people to work with!
                  </p>
                  <h4>
                    RJ, <span>Layers Avenue Software</span>
                  </h4>
                </div>

                <div className="item-box">
                  <img
                    src="../../images/testimonials/testimonials-3.jpg"
                    className="rounded-circle"
                    alt="webImage"
                  />
                  <p>
                    Outsourced the Uncharted Peak team for a project and we were able to deliver the project in record time, thanks!
                  </p>
                  <h4>
                    Shaun, <span>Design Club</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonialsbg-shape">
          <img src="../../images/testimonials/testimonials-shape.png" alt="webImage" />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
