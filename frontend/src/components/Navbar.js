import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const { data } = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Calm Haven
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/services">SERVICES</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>

      {/* User Profile - Placed on the right */}
      {user && (
        <li
          className="profile-container"
          onClick={() => navigate("/dashboard")}
        >
          <img
            src={
              user.profilePic || `https://ui-avatars.com/api/?name=${user.name}`
            }
            alt="User"
            className="profile-pic"
          />
        </li>
      )}
    </nav>
  );
};

export default Navbar;
