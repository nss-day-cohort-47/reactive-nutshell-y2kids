import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom"
import { ArticleCard } from "./ArticleCard";
import {deleteArticle, getAllArticles} from "../modules/ArticleManager";
import "./ArticleList.css"

export const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = () => {
        return getAllArticles().then(articlesFromAPI =>{
            setArticles(articlesFromAPI)
        });
    };
    
    const history = useHistory();

    useEffect(() => {
        getArticles();
    },[]);

    const handleDeleteArticle = id => {
        deleteArticle(id)
        .then(()=>getAllArticles().then(setArticles));
    };

    return(
        <div className="article_cards">
                <button type="button" className="new-article-bttn" onClick={() => {history.push("/create")}}>
                New Article
                </button>
                <div className="article-list">
            {articles.map(article => <ArticleCard key={article.id} article={article} handleDeleteArticle={handleDeleteArticle}/>)}
            </div>
        </div>
    );

};
