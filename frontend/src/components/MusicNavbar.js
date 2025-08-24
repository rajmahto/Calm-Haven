import React from "react";
import { NavLink } from "react-router-dom";

const MusicNavbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-center space-x-6">
        <NavLink
          to="/music"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md ${
              isActive
                ? "bg-white text-blue-600 font-bold"
                : "hover:bg-blue-500"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/music/podcasts"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md ${
              isActive
                ? "bg-white text-blue-600 font-bold"
                : "hover:bg-blue-500"
            }`
          }
        >
          Podcasts
        </NavLink>
        <NavLink
          to="/music/audiobooks"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md ${
              isActive
                ? "bg-white text-blue-600 font-bold"
                : "hover:bg-blue-500"
            }`
          }
        >
          Audiobooks
        </NavLink>
      </div>
    </nav>
  );
};

export default MusicNavbar;
