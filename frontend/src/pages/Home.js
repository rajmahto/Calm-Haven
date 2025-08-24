import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Home.css";

const Home = () => {
  const steveJobsQuotes = useMemo(
    () => [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",
      "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
      "The only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
      "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. - Steve Jobs",
      "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected. - Steve Jobs",
      "Details matter, it's worth waiting to get it right. - Steve Jobs",
      "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
      "The most powerful person in the world is the storyteller. The storyteller sets the vision, values, and agenda of an entire generation that is to come. - Steve Jobs",
      "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary. - Steve Jobs",
    ],
    []
  );

  const [randomSteveJobsQuote, setRandomSteveJobsQuote] = useState(
    steveJobsQuotes[Math.floor(Math.random() * steveJobsQuotes.length)]
  );
  const navigate = useNavigate(); // Initialize useNavigate

  // Update the quote every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomSteveJobsQuote(
        steveJobsQuotes[Math.floor(Math.random() * steveJobsQuotes.length)]
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [steveJobsQuotes]);

  // Navigate to the Music page
  const handleFindYourRhythmClick = () => {
    navigate("/music");
  };

  // Navigate to the Meditation page
  const handleExploreMeditationsClick = () => {
    navigate("/meditation");
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to Calm Haven</h1>
        <p className="home-subtitle">Your personal wellness companion.</p>
      </header>

      <main className="home-main">
        <section className="home-section fade-in">
          <h2 className="section-heading">Discover Inner Peace</h2>
          <p>
            Explore our guided meditation sessions designed to help you relax,
            reduce stress, and find your center.
          </p>
          <button
            className="home-button"
            onClick={handleExploreMeditationsClick}
          >
            Explore Meditations
          </button>
        </section>

        <section className="home-section fade-in">
          <h2 className="section-heading">Find Your Rhythm</h2>
          <p>
            Immerse yourself in our curated collection of calming music, perfect
            for relaxation, focus, or sleep.
          </p>
          <button className="home-button" onClick={handleFindYourRhythmClick}>
            Listen to Music
          </button>
        </section>

        <section className="home-section fade-in quote-section">
          <h2 className="section-heading">Daily Inspiration</h2>
          <div className="quote-container">
            <p className="quote">"{randomSteveJobsQuote}"</p>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2023 Calm Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
