import React, { useState, useEffect } from "react";
//import "./Profile.css";

const Profile = () => {
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("profilePic") || ""
  );
  const [bio, setBio] = useState(localStorage.getItem("bio") || "");
  const [note, setNote] = useState(localStorage.getItem("note") || "");

  useEffect(() => {
    localStorage.setItem("profilePic", profilePic);
    localStorage.setItem("bio", bio);
    localStorage.setItem("note", note);
  }, [profilePic, bio, note]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <label htmlFor="profile-pic-upload">
        {profilePic ? (
          <img src={profilePic} alt="Profile" className="profile-pic" />
        ) : (
          <div className="upload-placeholder">Upload Image</div>
        )}
      </label>
      <input
        id="profile-pic-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Enter your bio..."
      />

      <h3>Notes</h3>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
      />
    </div>
  );
};

export default Profile;
