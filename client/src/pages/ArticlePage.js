import React from 'react'
import ArticlesList from '../components/ArticlesList'
import { useParams } from 'react-router-dom'
import articleContent from "./article-content"

const ArticlePage = () => { 
  const { name } = useParams();
  const article = articleContent.find(article => article.name === name);
  if(!article) return <h1>Article Doesn't Exist</h1>
  const otherArticles = articleContent.filter(article => article.name !== name)
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  )
}

export default ArticlePage