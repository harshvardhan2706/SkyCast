import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/style.css";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://gnews.io/api/v4/search?q=weather&lang=en&max=5&apikey=7a0b189ed67e8adb27aec7c8de9a15ef` // Replace with your actual API key
      );
      setArticles(res.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="container mt-4 glass-card p-4 news-feed">
      <h4 className="text-white mb-3 text-center">Latest Weather News</h4>
      {articles.map((article, idx) => (
        <div key={idx} className="news-card mb-3 p-3 rounded text-white">
          <h5>{article.title}</h5>
          <p className="mb-1">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            Read more →
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
