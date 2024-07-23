import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./Navbar";
import "../components/assets/contact.css";
import Footer from "./Footer";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    try {
      const res = await axios.post(
        "https://delecampus.vercel.app/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        window.alert("Login successful");
        console.log("Login successful");
        const redirectTo = localStorage.getItem('redirectAfterLogin') || '/profile';
        localStorage.removeItem('redirectAfterLogin'); // Clear the redirect route
        navigate(redirectTo);
      } else {
        console.log("Failed to login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        window.alert("Invalid Credentials");
        console.log("Invalid Credentials");
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
          <h1 className="text-center">Login</h1>
          <div className="contact-content">
            <div className="contact-form">
              <form method="POST" className="contactpage-form" onSubmit={PostData}>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address *"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password *"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="contact"
                    value="Login"
                    className="submit"
                  />
                </div>
                <div>
                  <h6 className="mb-6">" * " Fields are mandatory</h6>
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
