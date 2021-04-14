import React from "react"

export const ArticleCard = ({article, handleDeleteArticle}) => (
  <section>
      <h2 className="article_title">{article.title}</h2>
      <div className="article_synopsis">{article.synopsis}</div>
      <div className="article_url"><a href={article.url}>Click Here To Read More</a></div>
      <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete Article</button>
  </section>
)