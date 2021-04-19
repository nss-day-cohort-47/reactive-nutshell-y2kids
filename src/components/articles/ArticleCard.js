import React from "react"
import {useHistory} from "react-router-dom"
import "./ArticleCard.css"

export const ArticleCard = ({article, handleDeleteArticle}) => {
  const history = useHistory()
  const currentLoggedInUser = parseInt(sessionStorage.getItem("nutshell_user"))
  if(currentLoggedInUser === article.userId){
  return(
  <section className="currentUser-card">
      <h2 className="currentUser-article_title">{article.title}</h2>
      <div className="currentUser-article_synopsis">{article.synopsis}</div>
      <div className="currentUser-article_url"><a className="card-url" href={article.url}>Click Here To Read More</a></div>
      <button className="delete-bttn" type="button" onClick={() => handleDeleteArticle(article.id)}>Delete Article</button>
      <button className="edit-bttn" type="button" onClick={() => history.push(`/${article.id}/edit`)}>Edit</button>
  </section>
  )}else{
    return(
    <section className="card">
      <h2 className="article_title">{article.title}</h2>
      <div className="article_synopsis">{article.synopsis}</div>
      <div className="article_url"><a className="card-url" href={article.url}>Click Here To Read More</a></div>
  </section>
  )};
};