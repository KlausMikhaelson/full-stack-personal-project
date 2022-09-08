import React from 'react';
import articleContent from "./article-content";
import "./ArticlesList.css"
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {
  return (
    <>
      <h1>ArticlesList</h1>
      {/* {articleContent.map((article, key) => (
        <Link className='article-list-item' key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))} */}
      <ArticlesList articles={articleContent} />

    </>
  )
}

export default ArticlesListPage