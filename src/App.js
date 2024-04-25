import React from "react";
import "./App.css";
import Header from "./lib/Header";
import Footer from "./lib/Footer";
import First from "./component/Home-Page/First";
import RegistrationForm from "./component/Register/registerform";
import About from "./component/AboutUs/about";
import Login from "./component/LoginForm/login";
import FindJob from "./component/Find-Job/FindJob";
import Mentee from "./component/Mentee/Mentee";
import ManteeDash from "./component/Mentee/Menteedash/Menteedash.jsx";
import Mentor from "./component/Mentor/Mentor";
import Mentordash from "./component/Mentor/Mentordash/Mentordash.jsx";
import MenteePSetting from "./component/Mentee/MenteeProflieSetting/MenteePSetting.jsx";
import MentorPSetting from "./component/Mentor/MentorProfileSetting/MentorPSetting.jsx";
import MentorClub from "./component/Mentorclub/MentorClub.jsx";
import SingleCousre from "./component/SingleCourse/SingleCourse";
import BusinessMentor from "./component/Businessmentor/BusinessMentor.jsx";
import { ContactUs, GoogleMap, Section7 } from "./component/Contactus/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {" "}
                <Header />
                <First />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                {" "}
                <Header />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <>
                {" "}
                <Header />
                <RegistrationForm />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                {" "}
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <>
                {" "}
                <Header />
                <ContactUs />
                <GoogleMap />
                <Section7 /> <Footer />
              </>
            }
          />
          <Route
            exact
            path="/findjob"
            element={
              <>
                {" "}
                <Header /> <FindJob />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/mentee"
            element={
              <>
                {" "}
                <Header />
                <Mentee />
                <Footer />
              </>
            }
          />
          <Route exact path="/menteedash" element={<ManteeDash />} />
          <Route
            exact
            path="/mentor"
            element={
              <>
                {" "}
                <Header /> <Mentor /> <Footer />
              </>
            }
          />
          <Route
            exact
            path="/singlecourse"
            element={
              <>
                {" "}
                <Header />
                <SingleCousre />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/menteepsetting"
            element={
              <>
                <MenteePSetting />
              </>
            }
          />
          <Route
            exact
            path="/mentordash"
            element={
              <>
                <Mentordash />
              </>
            }
          />
          <Route
            exact
            path="/mentorpsetting"
            element={
              <>
                <MentorPSetting />
              </>
            }
          />
          <Route
            exact
            path="/mentorclub"
            element={
              <>
                {" "}
                <Header />
                <MentorClub />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/businessmentor"
            element={
              <>
                {" "}
                <BusinessMentor />
                <Footer></Footer>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
