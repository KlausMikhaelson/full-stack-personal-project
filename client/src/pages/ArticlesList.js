import React from 'react';
import articleContent from "./article-content";
import { Link } from 'react-router-dom';
import "./ArticlesList.css"

const ArticlesList = () => {
  return (
    <>
      <h1>ArticlesList</h1>
      {articleContent.map((article, key) => (
        <Link className='article-list-item' key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        </Link>
      ))}
    </>
  )
}

export default ArticlesList