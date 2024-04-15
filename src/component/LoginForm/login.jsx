import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../feature/userSlice";

function Login({ setLoginUser }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://practiwiz-backend.azurewebsites.net/api/auth/login", user)
      .then((res) => {
        alert(res.data.message);
        dispatch(login(res.data.user)); // Dispatch the login action
        setLoginUser(res.data.user);
      })
      .catch((err) => {
        console.error("Error logging in:", err);
      });
  };

  return (
    <main>
      <div
        className="regis_background"
        style={{
          background: "url(/images/fsdssdd.webp) no-repeat",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="iuhieiuihaw_left sticky-top">
                <h3>
                  Grow Your Professional Career with{" "}
                  <span className="span222">Top-Rated</span> Mentors
                </h3>
                <p>
                  Join us to upgrade your professional career with our mentor’s
                  guidance. We provide a personalized training approach to
                  improve your project management skills. Master the skill to
                  work under pressure on various projects within tight
                  deadlines. At Practiwiz, we have courses for working
                  professionals, MBA students, and aspiring IT business
                  analysts. Hurry up and reserve your mentorship class today.
                </p>
                <h5 className="mt-4">Benefits of Our Mentorship Course:</h5>
                <ul className="ps-0 mt-3">
                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>
                      <p className="mb-0">Self-paced training</p>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>
                      <p className="mb-0">Flexible timing and scheduling</p>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>
                      <p className="mb-0">
                        Career guidance from experienced mentors
                      </p>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>
                      <p className="mb-0">Expert advice and guidance</p>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check"></i>
                      <p className="mb-0">
                        <a href="/login">Sign Up Now!</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="iuhieiuihaw_right bg-white p-5">
                <div className="uherrr_text text-center">
                  <h4>Log in</h4>
                  <p className="mb-0">
                    Do Not Have An Account? <a href="/login">Sign Up</a>
                  </p>
                </div>
                <div className="ihduwfr_form_wrapper mt-3">
                  <form>
                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        value={user.email}
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        aria-describedby="emailHelp"
                      />
                      <i className="fa-solid fa-envelopes-bulk position-absolute"></i>
                    </div>
                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={user.password}
                        placeholder="Password must be at least 8 characters"
                        onChange={handleChange}
                        required
                      />
                      <i className="fa-solid fa-eye position-absolute"></i>
                    </div>
                    <a href="/login" className="uidherrrr_anchor">
                      Forget password?
                    </a>
                    <button
                      type="submit"
                      className="btn btn-main py-3 mt-4"
                      onClick={handleSubmit}
                    >
                      Log in
                    </button>
                    <div className="dieyhr_iuhfiderr mt-4">
                      <div className="d-flex align-items-center">
                        <div className="btn btn-main">
                          <img className="me-1" src="images/fb.webp" alt="" />{" "}
                          Facebook
                        </div>
                        <div className="btn btn-main">
                          <img className="me-1" src="images/ggle.webp" alt="" />{" "}
                          Google
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
