import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/assets/contact.css";
import "../components/assets/tailwind.css";
import profileImage from "../images/profile.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    skill: "",
    ig_username: "",
    linkdin: "",
    twitter: "",
    github: "",
    profilePicture: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://delecampus.vercel.app/profile", {
          headers: { Authorization: token },
        });
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        if (error.response && error.response.status === 403) {
          navigate("/login");
        }
      }
    };
    fetchData();
  }, [navigate]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "https://delecampus.vercel.app/profile",
        user,
        {
          headers: { Authorization: token },
        }
      );
      setUser(res.data.user);
      setIsEditing(false);
      window.alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      window.alert("Failed to update profile");
    }
  };

  const handleProfilePictureChange = (e) => {
    setNewProfilePicture(e.target.files[0]);
  };

  const handleProfilePictureUpload = async () => {
    const formData = new FormData();
    formData.append("profilePicture", newProfilePicture);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://delecampus.vercel.app/profile-picture",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      setUser({ ...user, profilePicture: res.data.profilePicture });
      window.alert("Profile picture updated successfully");
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      window.alert("Failed to upload profile picture");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
    <Navbar/>
    <section className="contact">
      <div className="container mt-5 mb-6">
        <h1 className="text-center  font-bold">Hey! {user.name}</h1>
        <img
            src={user.profilePicture || profileImage}
            alt="Profile"
            className="profile-picture mx-auto w-32 h-32  object-cover"
          />
        <div className="profile-content text-center">
      
          <input
            type="file"
            onChange={handleProfilePictureChange}
            className="hidden"
            id="profilePicture"
          />
          <label htmlFor="profilePicture" className="cursor-pointer text-black-500 underline w-1/2">
            Change Picture
          </label>
          <button
            onClick={handleProfilePictureUpload}
            className="border-line text-white py-2 px-4   w-1/2 border-violet-500"
          >
            Upload
          </button>
        </div>
        <div className="profile-page mt-4">
          <div className="profile-group mb-4">
            <label className="block text-sm ml-14 font-medium w-1/2">Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputs}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              <p className="text-lg w-1/2">{user.name}</p>
            )}
          </div>
          <div className="profile-group mb-4">
            <label className="block text-sm ml-14 font-medium w-1/2">Skill:</label>
            {isEditing ? (
              <input
                type="text"
                name="skill"
                value={user.skill}
                onChange={handleInputs}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              <p className="text-lg w-1/2">{user.skill}</p>
            )}
          </div>
          <div className="profile-group mb-4">
            <label className="block text-sm ml-14 font-medium w-1/2">Instagram:</label>
            {isEditing ? (
              <input
                type="text"
                name="ig_username"
                value={user.ig_username}
                onChange={handleInputs}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              <p className="text-lg w-1/2">{user.ig_username}</p>
            )}
          </div>
          <div className="profile-group mb-4">
            <label className="block text-sm ml-14 font-medium w-1/2">LinkedIn:</label>
            {isEditing ? (
              <input
                type="text"
                name="linkdin"
                value={user.linkdin}
                onChange={handleInputs}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              <p className="text-lg w-1/2">{user.linkdin}</p>
            )}
          </div>
          <div className="profile-group mb-4">
            <label className="block text-sm ml-14 font-medium w-1/2">Twitter:</label>
            {isEditing ? (
              <input
                type="text"
                name="twitter"
                value={user.twitter}
                onChange={handleInputs}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              <p className="text-lg w-1/2">{user.twitter}</p>
            )}
          </div>
          <div className="profile-group mb-4 ">
            <label className="block text-sm ml-14 font-medium w-1/2">GitHub:</label>
            {isEditing ? (
              <input
                type="text"
                name="github"
                value={user.github}
                onChange={handleInputs}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              <p className="text-lg w-1/2">{user.github}</p>
            )}
          </div>
          <div className="profile-group mb-6">
            {isEditing ? (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleSave}
              >
                Save
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
          </div>
          <div className="profile-group mb-6">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
