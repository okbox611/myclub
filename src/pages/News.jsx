import { useRoute } from "wouter";
import { useState } from "react";

export default function News() {
  const [match, params] = useRoute("/news/:id");

  const [news, setNews] = useState([
    { id: "1", title: "First Post", content: "Hello world" },
  ]);

  // Listen for new posts from admin (simple global hack)
  window.addNews = (post) => {
    setNews((prev) => [...prev, post]);
  };

  if (params?.id) {
    const article = news.find((n) => n.id === params.id);

    return (
      <div>
        <h1>{article?.title}</h1>
        <p>{article?.content}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>News</h1>

      {news.map((item) => (
        <div key={item.id}>
          <a href={`/news/${item.id}`}>{item.title}</a>
        </div>
      ))}
    </div>
  );
}