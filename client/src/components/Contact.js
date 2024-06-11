import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./Navbar";
import contact from "../images/boy.svg";
import "../components/assets/contact.css";
import Footer from "./Footer";

export default function Contact() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    skill: "",
    ig_username: "",
    linkdin: "",
    twitter: "",
    github: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, skill, ig_username, linkdin, twitter, github, password, cpassword } = user;

    try {
      const res = await axios.post("http://localhost:5000/register", {
        name,
        email,
        skill,
        ig_username,
        twitter,
        linkdin,
        github,
        password,
        cpassword,
      });

      if (res.status === 201) {
        window.alert("Registration successful");
        console.log("Registration successful");
        navigate("/thankyou");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Something went wrong");
        console.log("Something went wrong", error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="container mt-5">
          <h1>Enroll Now</h1>
          <div className="contact-content">
            <img src={contact} alt="contact" />
            <div className="contact-form">
              <form method="POST" className="contactpage-form" onSubmit={PostData}>
                <div className="first">
                  <div className="form-group">
                    <label htmlFor="name"></label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your name   *"
                      value={user.name}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"></label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email Address   *"
                      value={user.email}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="skill"></label>
                    <input
                      type="text"
                      name="skill"
                      id="skill"
                      placeholder="Skills    *"
                      value={user.skill}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="second">
                  <div className="form-group">
                    <label htmlFor="ig_username"></label>
                    <input
                      type="text"
                      name="ig_username"
                      id="ig_username"
                      placeholder="Instagram Link"
                      value={user.ig_username}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="linkdin"></label>
                    <input
                      type="text"
                      name="linkdin"
                      id="linkdin"
                      placeholder="Linkdin Profile"
                      value={user.linkdin}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="twitter"></label>
                    <input
                      type="text"
                      name="twitter"
                      id="twitter"
                      placeholder="Batch"
                      value={user.twitter}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="third">
                  <div className="form-group">
                    <label htmlFor="github"></label>
                    <input
                      type="text"
                      name="github"
                      id="github"
                      placeholder="Github Profile"
                      value={user.github}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password   *"
                      value={user.password}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cpassword"></label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      placeholder="Confirm Password    *"
                      value={user.cpassword}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="contact"
                    value="Submit"
                    className="submit"
                  />
                </div>
                <div>
                  <h6>* Batch is in the numeric form only eg. 2020-24</h6>
                  <h6>* If you don't have any social media account simply leave it blank.</h6>
                  <h6>" * " Fields are mandatory</h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
