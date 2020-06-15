import React from "react";
import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";

const ArticleListPage = () => {
  return (
    <div>
      <h1>Article List5</h1>
      <ArticleList articles={articleContent} />
    </div>
  );
};

export default ArticleListPage;
