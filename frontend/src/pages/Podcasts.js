import React from "react";
import MusicNavbar from "../components/MusicNavbar";

const Podcasts = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <MusicNavbar />

      <div className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">🎙️ Welcome to Podcasts</h1>
        <p className="text-lg max-w-3xl">
          Listen to a wide range of podcasts that can inspire, relax, and
          educate you.
        </p>
      </div>

      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          🎧 Podcast Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <iframe
            src="https://open.spotify.com/embed/show/6pWypIMkKjvL3Xn0LYCu8I"
            width="100%"
            height="380"
            frameBorder="0"
            allow="encrypted-media"
            className="rounded-lg"
            title="Motivational Podcasts"
          ></iframe>

          <iframe
            src="https://open.spotify.com/embed/show/5hF08yofbGBhLz7a7f09aR"
            width="100%"
            height="380"
            frameBorder="0"
            allow="encrypted-media"
            className="rounded-lg"
            title="Relaxing Podcasts"
          ></iframe>

          <iframe
            src="https://open.spotify.com/embed/show/1hg6NFX6z1H1RTv8H8mS45"
            width="100%"
            height="380"
            frameBorder="0"
            allow="encrypted-media"
            className="rounded-lg"
            title="Wellness Podcasts"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
