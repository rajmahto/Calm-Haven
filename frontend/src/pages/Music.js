import React, { useEffect } from "react";
import "./Music.css";

const Music = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const revealSection = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Trigger reveal on load

    return () => window.removeEventListener("scroll", revealSection);
  }, []);

  return (
    <div className="music-page">
      {/* ✅ Music Therapy Navbar */}
      <nav className="music-navbar">
        <ul>
          <li>
            <a href="#music">Music</a>
          </li>
          <li>
            <a href="#podcasts">Podcasts</a>
          </li>
          <li>
            <a href="#audiobooks">Audiobooks</a>
          </li>
        </ul>
      </nav>

      {/* ✅ Full-Screen Welcome Section */}
      <header className="welcome-section">
        <h1>🎵 Welcome to Music Therapy</h1>
        <p>Immerse yourself in relaxing sounds, podcasts, and audiobooks.</p>
      </header>

      {/* ✅ Music Section */}
      <section id="music" className="section">
        <h2 className="subtitle">🎶 Relaxing Music</h2>
        <div className="iframe-grid">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0jgyAiPl8Af"
            className="iframe"
            title="Music Playlist 1"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO"
            className="iframe"
            title="Music Playlist 2"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZ0OzPeadl0h"
            className="iframe"
            title="Music Playlist 3"
          ></iframe>
        </div>
      </section>

      {/* ✅ Podcast Section */}
      <section id="podcasts" className="section">
        <h2 className="subtitle">🎙️ Podcasts for Relaxation</h2>
        <div className="iframe-grid">
          <iframe
            src="https://open.spotify.com/embed/show/3ETekCdItkV47DbqT2V3pQ"
            className="iframe"
            title="Podcast 1"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/show/5AvwZVawapvyhJUIx71pdJ"
            className="iframe"
            title="Podcast 2"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/show/4rOoJ6Egrf8K2IrywzwOMk"
            className="iframe"
            title="Podcast 3"
          ></iframe>
        </div>
      </section>

      {/* ✅ Audiobook Section */}
      <section id="audiobooks" className="section">
        <h2 className="subtitle">📚 Audiobooks</h2>
        <div className="iframe-grid">
          <iframe
            src="https://open.spotify.com/embed/album/5pib1ZQ4p1CUcK0eU3ZWKP"
            className="iframe"
            title="Audiobook 1"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/album/1GJei2wR3DWJBoqABoNfNz"
            className="iframe"
            title="Audiobook 2"
          ></iframe>
          <iframe
            src="https://open.spotify.com/embed/album/3Zwu2K0Qa5sT6teCCHPShP"
            className="iframe"
            title="Audiobook 3"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Music;
