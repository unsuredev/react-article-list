import React, { useEffect } from "react";
import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";

const ArticleListPage = () => {
  useEffect(() => {
    document.title = "Article  List ";
  }, []);

  return (
    <div>
      <h1>Article List :-</h1>
      <ArticleList articles={articleContent} />
    </div>
  );
};

export default ArticleListPage;
