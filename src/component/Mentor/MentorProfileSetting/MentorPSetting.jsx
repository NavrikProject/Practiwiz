import React from "react";
import Header2 from "../../../lib/Header2";

const MentorPSetting = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div class="md-header">
        <Header2></Header2>
        <div class="mentor_dashboard">
          <div class="row">
            <div class="col-lg-2 pe-0 csdegbfraedd">
              <div class="difuhtre_nav">
                <button class="btn btn-transparent text-center py-3">
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-user"></i>
                  </span>

                  <h5>Dashboard</h5>
                </button>

                <button class="btn btn-transparent text-center py-3">
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-bars"></i>
                  </span>

                  <h5>PROFILE SETTINGS</h5>
                </button>

                <button class="btn btn-transparent text-center py-3">
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-brands fa-rocketchat"></i>
                  </span>

                  <h5>MESSAGES</h5>
                </button>

                <button class="btn btn-transparent text-center py-3">
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-bell"></i>
                  </span>

                  <h5>NOTIFICATIONS</h5>
                </button>

                <button class="btn btn-transparent text-center py-3">
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                  </span>

                  <h5>CHANGE PASSWORD</h5>
                </button>

                <button class="btn btn-transparent text-center py-3">
                  <span class="d-block bg-white position-relative m-auto mb-3">
                    <i class="fa-solid fa-right-from-bracket"></i>
                  </span>

                  <h5>LOG OUT</h5>
                </button>
              </div>
            </div>

            <div class="col-lg-10 ps-0">
              <div class="difuhtre_content">
                <div class="container">
                  <div class="col-lg-10 col-md-12">
                    <div class="mentor-prf-settings py-5">
                      <h3>Profile Settings</h3>

                      <h5>Update your profile</h5>

                      <form>
                        <div class="huygrut d-flex py-3 align-items-center">
                          <div class="deuirr_circle position-relative overflow-hidden me-3">
                            <img
                              src="images/idherreee.webp"
                              width="100%"
                              alt=""
                            />
                          </div>

                          <button class="btn btn-main me-3">
                            Upload Avatar
                          </button>

                          <button class="btn btn-transparent">Delete</button>
                        </div>

                        <div class="mb-4">
                          <label for="" class="form-label">
                            You Name *
                          </label>

                          <input
                            class="form-control"
                            placeholder="Enter Your Name"
                            autofocus
                          />
                        </div>

                        <div class="mb-4" id="skill-tag">
                          <label for="" class="form-label">
                            Your Skills *
                          </label>
                          <input
                            class="form-control"
                            placeholder="Eg., Business Analyst, Data Scientist..."
                            autofocus
                          />
                        </div>

                        <div class="ufguirniirtr position-relative mb-4">
                          <label for="" class="form-label">
                            About Me *
                          </label>

                          <textarea
                            type="text"
                            id="ammyInput"
                            name="myCountry"
                            class="form-control"
                            placeholder="Write something about yourself"
                          ></textarea>

                          <div id="amautosuggestions"></div>
                        </div>

                        <div class="row">
                          <div class="col-lg-6">
                            <div class="ufguirniirtr position-relative mb-4">
                              <label for="" class="form-label">
                                Your Profession *
                              </label>

                              <input
                                type="text"
                                id="ypmyInput"
                                name="myCountry"
                                class="form-control"
                                placeholder="Type what you do"
                              />

                              <div id="ypautosuggestions"></div>
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="ufguirniirtr position-relative mb-4">
                              <label for="" class="form-label">
                                You Are Expertise In *
                              </label>

                              <input
                                type="text"
                                id="yemyInput"
                                name="myCountry"
                                class="form-control"
                                placeholder="Start Typing..."
                              />

                              <div id="yeautosuggestions"></div>
                            </div>
                          </div>
                        </div>

                        <div class="ufguirniirtr position-relative mb-4">
                          <label for="" class="form-label">
                            Professional Experience *
                          </label>

                          <textarea
                            type="text"
                            id="pemyInput"
                            name="myCountry"
                            class="form-control"
                            placeholder="Write About Your Professional Experience"
                          ></textarea>

                          <div id="peautosuggestions"></div>
                        </div>

                        <div class="mb-4">
                          <label for="" class="form-label">
                            Your Social Account Link *
                          </label>

                          <input
                            type="text"
                            class="form-control mb-2"
                            placeholder="Paste Your LinkedIn Profile Link"
                          />

                          <input
                            type="text"
                            class="form-control mb-2"
                            placeholder="Paste Your X Profile Link (Previously Twitter)"
                          />

                          <input
                            type="text"
                            class="form-control mb-2"
                            placeholder="Paste Your Youtube Link"
                          />
                        </div>

                        <button class="btn btn-main">Save Changes</button>
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

export default MentorPSetting;
