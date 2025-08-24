import React from "react";
import MusicNavbar from "../components/MusicNavbar";

const Audiobooks = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <MusicNavbar />

      <div className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">📚 Welcome to Audiobooks</h1>
        <p className="text-lg max-w-3xl">
          Listen to bestselling books and self-improvement guides in audio
          format.
        </p>
      </div>

      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          📖 Audiobook Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX2nd8BSnJ6aJ"
            width="100%"
            height="380"
            frameBorder="0"
            allow="encrypted-media"
            className="rounded-lg"
            title="Self-Help Audiobooks"
          ></iframe>

          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZmOHImCXlQu"
            width="100%"
            height="380"
            frameBorder="0"
            allow="encrypted-media"
            className="rounded-lg"
            title="Storytelling Audiobooks"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Audiobooks;
