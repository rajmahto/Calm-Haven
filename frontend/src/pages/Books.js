import React, { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/books");
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📚 Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.map((book, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src={book.cover || "https://via.placeholder.com/150"}
              alt={book.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-4">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
