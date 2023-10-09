import React, { useState } from "react";
import Link from "../../utils/ActiveLink"
// import Image from 'next/image'


const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  return (
    <>
      {/* Start Header Area */}
      <header className="main-header-area">
        <div id="navbar" className="navbar-area">
          <div className="main-navbar">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/about">
                  <a className="navbar-brand nav-link" style={{ color: '#cdc4d9' }}>
                    <img src="../../images/Unchartedpeak-logo.png" alt="Uncharted Peak logo" style={{ width: '15rem'}} />
                    {/* Uncharted Peak */}
                  </a>
                </Link>

                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link href="#">
                        <a className="nav-link">
                          Home
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <a href="#about" className="nav-link">
                        About
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="#" activeClassName="active">
                            {/* /services/services */}
                            <a className="nav-link">Services</a>
                          </Link>
                        </li>

                        {/* <li className="nav-item">
                          <Link href="/services/services-2" activeClassName="active">
                            <a className="nav-link">Services Style - 2</a>
                          </Link>
                        </li> */}

                        <li className="nav-item">
                          <Link
                            href="#"
                            activeClassName="active"
                          >
                            {/* /services/service-details */}
                            <a className="nav-link">Services Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Projects
                      </a>
                    </li>

                    {/* <li className="nav-item">
                      <a href="#" className="nav-link">
                        Blog <i className="ri-arrow-down-s-line"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/blog/blog" activeClassName="active">
                            <a className="nav-link">Blog Style - 1</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/blog/blog-2" activeClassName="active">
                            <a className="nav-link">Blog Style - 2</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/blog/blog-right-sidebar"
                            activeClassName="active"
                          >
                            <a className="nav-link">Blog Right Sidebar</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Single Post
                            <i className="ri-arrow-down-s-line"></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link
                                href="/blog/single-blog"
                                activeClassName="active"
                              >
                                <a className="nav-link">Default</a>
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/blog/single-blog-2"
                                activeClassName="active"
                              >
                                <a className="nav-link">With Video</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li> */}

                    {/* <li className="nav-item">
                      <Link href="/pricing" activeClassName="active">
                        <a className="nav-link">Pricing</a>
                      </Link>
                    </li> */}
{/* 
                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Area */}

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="ri-search-2-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div className={`sidebarModal modal right fade ${isActiveSidebarModal ? "" : "show"}`}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button type="button" className="close" onClick={handleToggleSidebarModal}>
              <i className="ri-close-line"></i>
            </button>

            <div className="modal-body">
              <Link href="/">
                <a style={{ color: '#CDC4D9' }}>
                  {/* <Image
                    src="../../images/black-logo.png"
                    alt="webImage"
                  /> */}
                  Uncharted Peak
                </a>
              </Link>
              <div className="sidebar-content">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>

                <div className="sidebar-btn">
                  <Link href="/contact">
                    <a className="default-btn">
                      Let’s Talk
                    </a>
                  </Link>
                </div>
              </div>

              <div className="sidebar-contact-info">
                <h3>Contact Information</h3>

                <ul className="info-list">
                  <li>
                    <i className="ri-phone-fill"></i>{" "}
                    <a href="tel:0124567689">+27-12-456-7689</a>
                  </li>

                  <li>
                    <i className="ri-mail-line"></i>{" "}
                    <a href="mailto:info@unchartedpeak.co.za">info@unchartedpeak.co.za</a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i> WeWorks Office,
                    Sandton
                  </li>
                </ul>
              </div>

              <ul className="sidebar-social-list">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  );
};

export default Navbar;
