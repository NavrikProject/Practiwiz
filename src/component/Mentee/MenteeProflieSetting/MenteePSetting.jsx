import React from "react";
import "./MenteePSetting.css";

const MenteePSetting = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="md-header">
        <header>
          <div className="header-wrapper">
            <nav className="navbar mx-4 px-3 mt-3 navbar-expand-sm navbar-light bg-white">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img src="images/logo.png" alt="" />
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  id="nav-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  <span id="bar-icon" className="navbar-toggler-icon"></span>

                  <i
                    id="close-mark-icon"
                    className="fa-solid fa-xmark d-none"
                  ></i>
                </button>

                <div
                  className="navbarmenucollapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <form className="d-flex iugeuirrr align-items-center">
                    <div className="udgehrr pe-3">
                      <div className="cdsfsdvnghff position-relative">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Discover Your Mentor..."
                        />

                        <i className="fa-solid fa-magnifying-glass position-absolute"></i>
                      </div>
                    </div>

                    <div className="udgehrr position-relative ps-3">
                      <button className="btn btn-main mt-0" type="button">
                        <i className="fa-solid ps-0 fa-user"></i>
                      </button>

                      <ul className="djioerr_dpdwn bg-white position-absolute d-none p-3">
                        <li>Account Settings</li>

                        <li>View Public Profile</li>

                        <li>Log Out</li>
                      </ul>
                    </div>
                  </form>
                </div>

                <div className="odejr_res d-none">
                  <div className="d-flex align-items-center">
                    <div className="udgehrr position-relative me-3 ps-3">
                      <button className="btn btn-main mt-0" type="button">
                        <i className="fa-solid ps-0 fa-user"></i>
                      </button>

                      <ul className="djioerr_dpdwn bg-white position-absolute d-none p-3">
                        <li>Account Settings</li>

                        <li>View Public Profile</li>

                        <li>Log Out</li>
                      </ul>
                    </div>

                    <div
                      className="dashboard-side-bar"
                      id="responsive-side-bar"
                    >
                      <i className="fa-solid fa-2x fa-bars-staggered"></i>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <div className="mentor_dashboard">
          <div className="row">
            <div className="col-lg-2 pe-0 csdegbfraedd">
              <div className="difuhtre_nav">
                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-user"></i>
                  </span>

                  <h5>Dashboard</h5>
                </button>

                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bars"></i>
                  </span>

                  <h5>PROFILE SETTINGS</h5>
                </button>

                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-brands fa-rocketchat"></i>
                  </span>

                  <h5>MESSAGES</h5>
                </button>

                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bell"></i>
                  </span>

                  <h5>NOTIFICATIONS</h5>
                </button>

                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  </span>

                  <h5>CHANGE PASSWORD</h5>
                </button>

                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-hourglass-half"></i>
                  </span>

                  <h5>COMPLETED SESSIONS</h5>
                </button>

                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-bookmark"></i>
                  </span>

                  <h5>SAVED JOBS</h5>
                </button>

                <button className="btn btn-transparent text-center py-3">
                  <span className="d-block bg-white position-relative m-auto mb-3">
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </span>

                  <h5>LOG OUT</h5>
                </button>
              </div>
            </div>

            <div className="col-lg-10 ps-0">
              <div className="difuhtre_content">
                <div className="container">
                  <div className="col-lg-10 col-md-12">
                    <div className="mentor-prf-settings py-5">
                      <h3>Profile Settings</h3>

                      <h5>Update your profile</h5>

                      <form>
                        <div className="huygrut d-flex py-3 align-items-center">
                          <div className="deuirr_circle position-relative overflow-hidden me-3">
                            <img src="images/annesa.webp" width="100%" alt="" />
                          </div>

                          <button className="btn btn-main me-3">
                            Upload Avatar
                          </button>

                          <button className="btn btn-transparent">
                            Delete
                          </button>
                        </div>

                        <div className="mb-4">
                          <label for="" className="form-label">
                            Your Name *
                          </label>

                          <input
                            className="form-control"
                            placeholder="Enter Your Name"
                            autofocus
                          />
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-4" id="skill-tag">
                              <label for="" className="form-label">
                                Your Skills *
                              </label>

                              <input
                                type="text"
                                id="yemyInput"
                                name="myCountry"
                                className="form-control"
                                placeholder="Eg., Business Analyst, Data Scientist..."
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="ufguirniirtr position-relative mb-4">
                              <label for="" className="form-label">
                                You Are Expertise In *
                              </label>

                              <input
                                type="text"
                                id="yemyInput"
                                name="myCountry"
                                className="form-control"
                                placeholder="Start Typing..."
                              />

                              <div id="yeautosuggestions"></div>
                            </div>
                          </div>
                        </div>

                        <div className="ufguirniirtr position-relative mb-4">
                          <label for="" className="form-label">
                            About Me *
                          </label>

                          <textarea
                            type="text"
                            id="ammyInput"
                            name="myCountry"
                            className="form-control"
                            placeholder="Write something about yourself"
                          ></textarea>

                          <div id="amautosuggestions"></div>
                        </div>

                        <div className="ufguirniirtr position-relative mb-4">
                          <label for="" className="form-label">
                            Your Profession *
                          </label>

                          <input
                            type="text"
                            id="ypmyInput"
                            name="myCountry"
                            className="form-control"
                            placeholder="Type what you do"
                          />

                          <div id="ypautosuggestions"></div>
                        </div>

                        <div className="ufguirniirtr position-relative mb-4">
                          <label for="" className="form-label">
                            Professional Experience *
                          </label>

                          <textarea
                            type="text"
                            id="pemyInput"
                            name="myCountry"
                            className="form-control"
                            placeholder="Write About Your Professional Experience"
                          ></textarea>

                          <div id="peautosuggestions"></div>
                        </div>

                        <div className="mb-4">
                          <label for="" className="form-label">
                            Your Age *
                          </label>

                          <input
                            name="tags"
                            className="form-control"
                            placeholder="Enter Your Age"
                            autofocus
                          />
                        </div>

                        <div className="mb-4">
                          <label for="" className="form-label">
                            Language *
                          </label>

                          <input
                            name="tags"
                            className="form-control"
                            placeholder="Language"
                            autofocus
                          />
                        </div>

                        <div className="mb-4">
                          <label for="" className="form-label">
                            Your Social Account Link *
                          </label>

                          <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Paste Your LinkedIn Profile Link"
                          />

                          <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Paste Your X Profile Link (Previously Twitter)"
                          />

                          <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Paste Your Youtube Link"
                          />
                        </div>

                        <button className="btn btn-main">Save Changes</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenteePSetting;
