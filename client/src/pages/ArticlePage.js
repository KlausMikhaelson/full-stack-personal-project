import React, {useState, useEffect} from 'react'
import ArticlesList from '../components/ArticlesList'
import { useParams } from 'react-router-dom'
import articleContent from "./article-content"
import CommentsList from '../components/CommentsList'
import UpvoteSection from '../components/UpvoteSection'
import AddCommentform from '../components/AddCommentform'

const ArticlePage = () => { 
  const { name } = useParams();
  const article = articleContent.find(article => article.name === name);
  // if(!article) return <h1>Article Doesn't Exist</h1>
  const otherArticles = articleContent.filter(article => article.name !== name)
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`)
      const body = await result.json();
      console.log(body)
      setArticleInfo(body)
    }
    fetchData();
  }, [name])

  return (
    <>
      <h1>{article.title}</h1>
      <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentform articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  )
}

export default ArticlePage