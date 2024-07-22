import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../components/assets/profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    skill: "",
    ig_username: "",
    linkdin: "",
    twitter: "",
    github: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://delecampus.vercel.app/profile", {
          headers: { Authorization: token }
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
      const res = await axios.put("https://delecampus.vercel.app/profile", user, {
        headers: { Authorization: token }
      });
      setUser(res.data.user);
      setIsEditing(false);
      window.alert("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      window.alert("Failed to update profile");
    }
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div>
        <label>Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputs}
          />
        ) : (
          <p>{user.name}</p>
        )}
      </div>
      <div>
        <label>Skill:</label>
        {isEditing ? (
          <input
            type="text"
            name="skill"
            value={user.skill}
            onChange={handleInputs}
          />
        ) : (
          <p>{user.skill}</p>
        )}
      </div>
      <div>
        <label>Instagram Username:</label>
        {isEditing ? (
          <input
            type="text"
            name="ig_username"
            value={user.ig_username}
            onChange={handleInputs}
          />
        ) : (
          <p>{user.ig_username}</p>
        )}
      </div>
      <div>
        <label>LinkedIn:</label>
        {isEditing ? (
          <input
            type="text"
            name="linkdin"
            value={user.linkdin}
            onChange={handleInputs}
          />
        ) : (
          <p>{user.linkdin}</p>
        )}
      </div>
      <div>
        <label>Twitter:</label>
        {isEditing ? (
          <input
            type="text"
            name="twitter"
            value={user.twitter}
            onChange={handleInputs}
          />
        ) : (
          <p>{user.twitter}</p>
        )}
      </div>
      <div>
        <label>GitHub:</label>
        {isEditing ? (
          <input
            type="text"
            name="github"
            value={user.github}
            onChange={handleInputs}
          />
        ) : (
          <p>{user.github}</p>
        )}
      </div>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};

export default Profile;
