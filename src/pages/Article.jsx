import React, { useEffect, useState } from "react";
import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";
import NotFoundPage from "../pages/NotFoundPage";

const Article = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) });
  }, []);

  if (!article) {
    return <NotFoundPage />;
  }
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      <p>This post has been upvoted {articleInfo.upvotes} times</p>

      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticleList articles={otherArticles} />
    </>
  );
};

export default Article;