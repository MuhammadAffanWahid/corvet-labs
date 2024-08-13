import React from "react";
import styles from "./AppDevService.module.css";
import { Helmet } from "react-helmet";
import mobileImg from "../../assets/AppDevService/app/mobile.png";
import mobile_4 from "../../assets/AppDevService/app/mobile-4.png";
import mobile_3 from "../../assets/AppDevService/app/mobile-3.png";
import amazonLogo from "../../assets/AppDevService/client/amazon.svg";
import googleLogo from "../../assets/AppDevService/client/google.svg";
import lenovoLogo from "../../assets/AppDevService/client/lenovo.svg";
import paypalLogo from "../../assets/AppDevService/client/paypal.svg";
import shopifyLogo from "../../assets/AppDevService/client/shopify.svg";
import spotifyLogo from "../../assets/AppDevService/client/spotify.svg";
import shape_1 from "../../assets/AppDevService/shape-1.png";
import download_svg from "../../assets/AppDevService/download.svg";
import key from "../../assets/AppDevService/key.svg";
import signal from "../../assets/AppDevService/signal.svg";
import left_right from "../../assets/AppDevService/left-right.svg";
import corvet from "../../assets/AppDevService/corvet.png";

const AppDevService = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Appgen - App & Saas Landing Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="App and Saas Landing Template" />
        <meta
          name="keywords"
          content="Application, Clean, Saas, Dashboard, Bootstrap 5"
        />
        <meta content="Shreethemes" name="author" />
        <meta name="version" content="2.1.0" />
        <link rel="shortcut icon" href="images/favicon.ico" />
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link
          href="css/materialdesignicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="css/tiny-slider.css" />
        <link href="css/tobii.min.css" rel="stylesheet" type="text/css" />
        <link href="css/style.min.css" rel="stylesheet" type="text/css" />
      </Helmet>

      {/* Hero Start */}
      <section
        className="bg-half-170 app-home-wrapper d-table w-100 overflow-hidden"
        id="home"
      >
        <div className="container pt-2 mt-5">
          <div className="row align-items-center mb-5 pb-5">
            <div className="col-lg-7 col-md-6 text-start">
              <div className="title-heading text-start">
                <img src={corvet} height="50" alt="" className="" />
                <h1 className="heading mb-3 mt-2">
                  Make <span className="text-primary">everything</span> <br />{" "}
                  organize with us
                </h1>
                <p className="para-desc text-muted">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap4 html
                  page.
                </p>
                <div className="watch-video mt-4">
                  <a href="/" className="btn btn-primary mb-2">
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 mb-5">
              <img
                src={mobileImg}
                className={`${styles.imgFluid} ${styles.floatAnimation}`} // Apply the CSS module classes
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero End */}

      {/* Client Start */}
      <section className="pt-3 pb-2 border-top border-bottom position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={amazonLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={googleLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={lenovoLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={paypalLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={shopifyLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={spotifyLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="home-shape-arrow">
              <a href="#download" className="scroll-down">
                <img
                  src={download_svg}
                  alt="Download Arrow"
                  className={styles.arrowIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Client End */}

      <section className="section overflow-hidden mt-5 pt-5" id="service">
        {/* Work Process Start */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h6 className="text-primary font-weight-normal mb-3">
                  Work Process
                </h6>
                <h4 className="title mb-4">How It Works ?</h4>
                <p
                  className={`${styles.maxWidthText} para-desc mx-auto text-muted mb-0`}
                >
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap4 html
                  page.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature position-relative text-center">
                <div className="p-4 rounded position-relative overflow-hidden">
                  {/* SVG Key Wrapper */}
                  <div className={`${styles.svgKeywrapper}`}>
                    <img src={key} alt="Key" className={`${styles.svgKey}`} />
                  </div>

                  {/* Image */}
                  <div className="icon text-primary">
                    <img
                      src={shape_1}
                      className="avatar avatar-small icon-shape"
                      alt=""
                    />
                  </div>

                  <div className="content mt-4">
                    <h5>
                      <div className="title text-dark">Create Account</div>
                    </h5>
                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature position-relative text-center">
                <div className="p-4 rounded position-relative overflow-hidden">
                  <div className={`${styles.svgKeywrapper}`}>
                    <img
                      src={signal}
                      alt="Key"
                      className={`${styles.svgKey}`}
                    />
                  </div>

                  <div className="icon text-primary">
                    <img
                      src={shape_1}
                      className="avatar avatar-small icon-shape"
                      alt=""
                    />
                  </div>
                  <div className="content mt-4">
                    <h5>
                      <div className="title text-dark">Data Analysis</div>
                    </h5>
                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="feature position-relative text-center">
                <div className="p-4 rounded position-relative overflow-hidden">
                  <div className="icon text-primary">
                    <div className={`${styles.svgKeywrapper}`}>
                      <img
                        src={left_right}
                        alt="Key"
                        className={`${styles.svgKey}`}
                      />
                    </div>
                    <img
                      src={shape_1}
                      className="avatar avatar-small icon-shape"
                      alt=""
                    />
                  </div>
                  <div className="content mt-4">
                    <h5>
                      <div className="title text-dark">Show Result</div>
                    </h5>
                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Work Process End */}

        {/* Feature Start */}
        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <img src={mobile_3} className="img-fluid mover" alt="" />
            </div>

            <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title">
                <h4 className="title mb-4">
                  Easy and Perfect <br /> Solution for your Apps
                </h4>
                <p className="text-muted para-desc">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap4 html
                  page.
                </p>
                <ul className="list-unstyled">
                  <li className="mt-2">
                    <i
                      data-feather="check-circle"
                      className="fea icon-sm text-primary me-2"
                    ></i>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="mt-2">
                    <i
                      data-feather="check-circle"
                      className="fea icon-sm text-primary me-2"
                    ></i>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="mt-2">
                    <i
                      data-feather="check-circle"
                      className="fea icon-sm text-primary me-2"
                    ></i>
                    Create your own skin to match your brand
                  </li>
                </ul>
                <div className="watch-video mt-4">
                  <a href="/" className="btn btn-primary mb-2 me-2">
                    Read More
                  </a>
                  <a
                    href="/"
                    data-type="youtube"
                    data-id="yba7hPeTSjk"
                    className="video-play-icon lightbox watch title-dark text-dark mb-2"
                  >
                    <i className="mdi mdi-play play-icon-circle text-center d-inline-block me-2 rounded-pill text-white title-dark position-relative play play-iconbar"></i>{" "}
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
              <img src={mobile_4} className="img-fluid mover" alt="" />
            </div>

            <div className="col-lg-6 col-md-6 col-12 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title">
                <h4 className="title mb-4">Core Features : Appgen</h4>
                <p className="text-muted para-desc">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap4 html
                  page.
                </p>
              </div>
              <div className="accordion mt-4 pt-2" id="buyingquestion">
                <div className="accordion-item rounded shadow overflow-hidden">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button border-0 bg-light"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Fully Responsive
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse border-0 collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#buyingquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded shadow overflow-hidden mt-2">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button border-0 bg-light collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Free Download
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#buyingquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>

                <div className="accordion-item rounded shadow overflow-hidden mt-2">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button border-0 bg-light collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Support
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#buyingquestion"
                  >
                    <div className="accordion-body text-muted bg-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2">
                <a href="/" className="btn btn-primary">
                  See More{" "}
                  <i data-feather="chevron-right" className="fea icon-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
      </section>

      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-4">Happy Client's</h4>
              <p className="text-muted para-desc mx-auto mb-0">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-4">
            <div className="tiny-three-item">
              <div className="tiny-slide">
                <div className="customer-testi m-1">
                  <div className="content p-3 shadow rounded bg-white position-relative">
                    <ul className="list-unstyled mb-0 text-warning">
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                    <p className="text-muted mt-2">
                      " According to most sources, Lorum Ipsum can be traced
                      back to a text composed by Cicero Launch your campaign and
                      benefit from our expertise. "
                    </p>
                  </div>
                  <div className="d-flex mt-3 align-items-center">
                    <img
                      src="images/client/01.jpg"
                      className="avatar avatar-small me-3 rounded shadow"
                      alt=""
                    />
                    <p className="text-primary mb-0">
                      - Calvin Carlo{" "}
                      <small className="text-muted d-block ms-2">Manager</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiny-slide">
                <div className="customer-testi m-1">
                  <div className="content p-3 shadow rounded bg-white position-relative">
                    <ul className="list-unstyled mb-0 text-warning">
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                    <p className="text-muted mt-2">
                      " According to most sources, Lorum Ipsum can be traced
                      back to a text composed by Cicero Launch your campaign and
                      benefit from our expertise. "
                    </p>
                  </div>
                  <div className="d-flex mt-3 align-items-center">
                    <img
                      src="images/client/02.jpg"
                      className="avatar avatar-small me-3 rounded shadow"
                      alt=""
                    />
                    <p className="text-primary mb-0">
                      - Christa Smith{" "}
                      <small className="text-muted d-block ms-2">Manager</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiny-slide">
                <div className="customer-testi m-1">
                  <div className="content p-3 shadow rounded bg-white position-relative">
                    <ul className="list-unstyled mb-0 text-warning">
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                    <p className="text-muted mt-2">
                      " According to most sources, Lorum Ipsum can be traced
                      back to a text composed by Cicero Launch your campaign and
                      benefit from our expertise. "
                    </p>
                  </div>
                  <div className="d-flex mt-3 align-items-center">
                    <img
                      src="images/client/03.jpg"
                      className="avatar avatar-small me-3 rounded shadow"
                      alt=""
                    />
                    <p className="text-primary mb-0">
                      - Jemina CLone{" "}
                      <small className="text-muted d-block ms-2">Manager</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiny-slide">
                <div className="customer-testi m-1">
                  <div className="content p-3 shadow rounded bg-white position-relative">
                    <ul className="list-unstyled mb-0 text-warning">
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                    <p className="text-muted mt-2">
                      " According to most sources, Lorum Ipsum can be traced
                      back to a text composed by Cicero Launch your campaign and
                      benefit from our expertise. "
                    </p>
                  </div>
                  <div className="d-flex mt-3 align-items-center">
                    <img
                      src="images/client/04.jpg"
                      className="avatar avatar-small me-3 rounded shadow"
                      alt=""
                    />
                    <p className="text-primary mb-0">
                      - Smith Vodka{" "}
                      <small className="text-muted d-block ms-2">Manager</small>
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiny-slide">
                <div className="customer-testi m-1">
                  <div className="content p-3 shadow rounded bg-white position-relative">
                    <ul className="list-unstyled mb-0 text-warning">
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                    <p className="text-muted mt-2">
                      " According to most sources, Lorum Ipsum can be traced
                      back to a text composed by Cicero Launch your campaign and
                      benefit from our expertise. "
                    </p>
                  </div>
                  <div className="d-flex mt-3 align-items-center">
                    <img
                      src="images/client/05.jpg"
                      className="avatar avatar-small me-3 rounded shadow"
                      alt=""
                    />
                    <p className="text-primary mb-0">
                      - Cristino Murfi{" "}
                      <small className="text-muted d-block ms-2">Manager</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-100 mt-60">
        <div
          className="py-5 px-4 bg-primary rounded-pill"
          style={{ background: "url('images/map.png') center center" }}
        >
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title text-white mb-4">
                  Subscribe our Newsletter
                </h4>
                <p className="text-white-50 mx-auto para-desc mb-0">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap4 html
                  page.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text-center subcribe-form mt-4 pt-2">
                <form>
                  <div className="form-group mb-0">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="rounded-pill"
                      placeholder="Your Email Id"
                    />
                    <button type="submit" className="btn btn-pills btn-success">
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section bg-light" id="download">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={mobile_4}
                className="img-fluid d-block mx-auto"
                alt="App"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title">
                <div className="alert alert-light alert-pills" role="alert">
                  <span className="badge bg-dark rounded-pill me-1">Apps</span>
                  <span className="content">
                    Download now{" "}
                    <i data-feather="chevron-right" className="fea icon-sm"></i>
                  </span>
                </div>
                <h4 className="title mb-4 mt-2">
                  Available for your <br /> Smartphones
                </h4>
                <p className="text-muted para-desc mb-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="mt-4 mb-4">
                  <a href="/" className="btn btn-lg btn-primary mt-2 me-2">
                    <i className="mdi mdi-apple"></i> App Store
                  </a>
                  <a href="/" className="btn btn-lg btn-primary mt-2">
                    <i className="mdi mdi-google-play"></i> Play Store
                  </a>
                </div>

                <div className="d-inline-block">
                  <div className="pt-4 d-flex align-items-center border-top">
                    <i
                      data-feather="smartphone"
                      className="fea icon-md me-2 text-primary"
                    ></i>
                    <div className="content">
                      <p className="mb-0">Install app now on your cellphones</p>
                      <a href="/" className="text-primary small">
                        Learn More <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevService;
