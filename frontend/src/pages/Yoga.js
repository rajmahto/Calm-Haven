import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Yoga.css";

const Yoga = () => {
  const [data, setData] = useState({ benefits: [], asanas: [], videos: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/yoga");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching yoga data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="yoga-page">
      {/* ✅ Navbar */}
      <nav className="yoga-navbar">
        <ul>
          <li>
            <Link to="/">🏡 Home</Link>
          </li>
          <li>
            <a href="#benefits">🌿 Benefits</a>
          </li>
          <li>
            <a href="#asanas">🧘 Asanas</a>
          </li>
          <li>
            <a href="#videos">📺 Videos</a>
          </li>
        </ul>
      </nav>

      {/* ✅ Header */}
      <header className="yoga-header">
        <h1>🧘 Yoga Therapy</h1>
        <p>Find balance, strength, and peace with yoga.</p>
      </header>

      {/* ✅ Benefits Section */}
      <section id="benefits" className="yoga-benefits">
        <h2>🌿 Benefits of Yoga</h2>
        <ul>
          {data.benefits.map((benefit, index) => (
            <li key={index}>✅ {benefit}</li>
          ))}
        </ul>
      </section>

      {/* ✅ Yoga Asanas Section */}
      <section id="asanas" className="yoga-asanas">
        <h2>🧘 Popular Yoga Asanas</h2>
        <div className="asanas-grid">
          {data.asanas.map((asana, index) => (
            <div key={index} className="asana-card">
              <img src={asana.image} alt={asana.name} />
              <h3>{asana.name}</h3>
              <p>{asana.description}</p>
              <a href={asana.link} target="_blank" rel="noopener noreferrer">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Videos Section */}
      <section id="videos" className="yoga-videos">
        <h2>📺 Yoga Tutorials</h2>
        <div className="videos-grid">
          {data.videos.map((video, index) => (
            <iframe
              key={index}
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Yoga;
