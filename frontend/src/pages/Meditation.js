import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // ✅ Animations
import "./Meditation.css";

const Meditation = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/meditation"
        );
        console.log("✅ Videos received:", data);
        setVideos(data); // ✅ Ensure React detects state change
      } catch (error) {
        console.error("❌ Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  // ✅ Reveal Sections on Scroll
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".section").forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          section.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="meditation-page">
      {/* ✅ Meditation Therapy Navbar */}
      <nav className="meditation-navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#guided">Guided Meditation</a>
          </li>
          <li>
            <a href="#music">Meditation Music</a>
          </li>
          <li>
            <a href="#audiobooks">Mindfulness Audiobooks</a>
          </li>
        </ul>
      </nav>

      {/* ✅ Full-Screen Welcome Section */}
      <header id="home" className="welcome-section">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           Welcome to Meditation Therapy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Relax, breathe, and immerse yourself in guided meditation, music, and
          mindfulness practices.
        </motion.p>
      </header>

      {/* ✅ Guided Meditation Section */}
      <section id="guided" className="section">
        <h2 className="subtitle">🌿 Guided Meditation</h2>
        {loading ? (
          <p className="loading-text">⏳ Loading meditation videos...</p>
        ) : (
          <div className="iframe-grid">
            {videos.length > 0 ? (
              videos.map((video, index) => (
                <motion.div
                  key={index}
                  className="iframe-container"
                  whileHover={{ scale: 1.05 }}
                >
                  <iframe
                    className="iframe"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  <p className="video-title">{video.title}</p>
                </motion.div>
              ))
            ) : (
              <p className="error-text">❌ No meditation videos available.</p>
            )}
          </div>
        )}
      </section>

      {/* ✅ Meditation Music Section */}
      <section id="music" className="section">
        <h2 className="subtitle">🎵 Meditation Music</h2>
        <div className="iframe-grid">
          {[
            "37i9dQZF1DWZqd5JICZI0u",
            "37i9dQZF1DX3Ogo9pFvBkY",
            "37i9dQZF1DX6VdMW310YC7",
          ].map((playlist, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <iframe
                src={`https://open.spotify.com/embed/playlist/${playlist}`}
                className="iframe"
                title={`Meditation Playlist ${index + 1}`}
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Mindfulness Audiobooks Section */}
      <section id="audiobooks" className="section">
        <h2 className="subtitle">📖 Mindfulness Audiobooks</h2>
        <div className="iframe-grid">
          {[
            "6Kxts6suLuXFI1T4sdjwUT",
            "0yJxZpeusWk4QErv93VZCC",
            "3W2ZcrRsInZbjWylOi6KhZ",
          ].map((album, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <iframe
                src={`https://open.spotify.com/embed/album/${album}`}
                className="iframe"
                title={`Mindfulness Audiobook ${index + 1}`}
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Meditation;
