import React from "react";
import "./TherapySection.css";

const TherapySection = () => {
  return (
    <div className="therapy-container">
      <div className="therapy-box">
        <h2>🎧 Audio Therapy</h2>
        <p>Listening to music & other audio files often enlightens our mood.</p>
        <button>Let's Explore</button>
      </div>

      <div className="therapy-box">
        <h2>📖 Reading Therapy</h2>
        <p>
          Motivational quotes and books can help us divert and change our mood.
        </p>
        <button>Let's Explore</button>
      </div>

      <div className="therapy-box">
        <h2>🧘 Yoga Therapy</h2>
        <p>Yoga and exercise play a very important role in our lives.</p>
        <button>Let's Explore</button>
      </div>
    </div>
  );
};

export default TherapySection;
