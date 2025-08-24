import React, { useEffect, useState } from "react";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/articles");
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📰 Articles</h1>
      <ul className="list-disc pl-5">
        {articles.map((article, index) => (
          <li key={index} className="mb-2">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
