import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [bio, setBio] = useState("");
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");

      try {
        const { data } = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
        setBio(data.bio || "Click to add bio...");
        setThoughts(data.thoughts || []);
      } catch {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  // Handle Bio Edit
  const toggleBioEdit = () => setIsEditingBio(!isEditingBio);
  const handleBioChange = (e) => setBio(e.target.value);
  const saveBio = async () => {
    setIsEditingBio(false);
    try {
      await axios.post("http://localhost:5000/api/auth/update-bio", { bio });
    } catch (error) {
      console.error("Error updating bio", error);
    }
  };

  // Handle Thoughts
  const addThought = async () => {
    if (!newThought.trim()) return;
    const updatedThoughts = [...thoughts, newThought];
    setThoughts(updatedThoughts);
    setNewThought("");

    try {
      await axios.post("http://localhost:5000/api/auth/update-thoughts", {
        thoughts: updatedThoughts,
      });
    } catch (error) {
      console.error("Error adding thought", error);
    }
  };

  const deleteThought = async (index) => {
    const updatedThoughts = thoughts.filter((_, i) => i !== index);
    setThoughts(updatedThoughts);

    try {
      await axios.post("http://localhost:5000/api/auth/update-thoughts", {
        thoughts: updatedThoughts,
      });
    } catch (error) {
      console.error("Error deleting thought", error);
    }
  };

  return (
    <div className="dashboard-container">
      <motion.div
        className="dashboard-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* User Profile Initials */}
        <div className="profile-picture-container">
          {user?.name
            ?.split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase()}
        </div>

        <h1 className="user-name">{user?.name}</h1>

        {/* Editable Bio */}
        {isEditingBio ? (
          <textarea
            className="bio-textarea"
            value={bio}
            onChange={handleBioChange}
            onBlur={saveBio}
          />
        ) : (
          <p className="user-bio" onClick={toggleBioEdit}>
            {bio}
          </p>
        )}

        {/* Thoughts Section */}
        <div className="thoughts-container">
          <h2 className="thoughts-title">📝 Your Thoughts</h2>
          <div className="thoughts-input-container">
            <input
              type="text"
              className="thoughts-input"
              placeholder="Write a thought..."
              value={newThought}
              onChange={(e) => setNewThought(e.target.value)}
            />
            <button className="add-thought-button" onClick={addThought}>
              Add
            </button>
          </div>

          {/* Thoughts List */}
          <ul className="thoughts-list">
            {thoughts.map((thought, index) => (
              <li key={index} className="thought-item">
                {thought}
                <button
                  className="delete-thought-button"
                  onClick={() => deleteThought(index)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <button onClick={() => navigate("/login")} className="logout-button">
          Logout
        </button>
      </motion.div>
    </div>
  );
};

export default Dashboard;
