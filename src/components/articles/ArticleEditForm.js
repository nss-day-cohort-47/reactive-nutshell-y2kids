import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router";
import {updateArticle,getArticlesById} from "../modules/ArticleManager"
import "./ArticleAddForm.css"

export const ArticleEditForm = () => {
const [article, setArticle]= useState({title:"",synopsis:"",url:""});
const [isLoading, setIsLoading]= useState(false);

const {articleId} = useParams();
const history = useHistory();


const handleFieldChange = (event) =>{
    const stateToChange={...article};
    stateToChange[event.target.id]= event.target.value;
    setArticle(stateToChange);
};

const updateExistingArticle = (event) => {
    event.preventDefault()
    setIsLoading(true);
    
    const editedArticle = {
        userId:article.userId,
        id:articleId,
        title:article.title,
        synopsis:article.synopsis,
        url:article.url,
        timestamp:article.timestamp
    };
    
    updateArticle(editedArticle)
    .then(()=> history.push("/")
    )
}
    
    useEffect(()=>{
        getArticlesById(articleId)
        .then(article => {
            setArticle(article);
            setIsLoading(false);
        });
    },[]);
    
return (
    <form className="articleEditForm">
            <h2 className="articleEditForm__title">Edit Article</h2>
        <fieldset>
            <div>
                <label>News Title:</label>
                <input type="text" id="title" onChange={handleFieldChange} required autoFocus className="from-control" value={article.title} />
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label>Synopsis:</label>
                <input type="text" id="synopsis" onChange={handleFieldChange} required autoFocus className="form-control" value={article.synopsis}/>
            
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label>URL:</label>
                <input type="text" id="url" onChange={handleFieldChange} required autoFocus className="form-control" value={article.url}/>
            </div>
        </fieldset>
            <button className="btn btn-primary" disabled={isLoading} onClick={updateExistingArticle}>Update Article</button>
    </form>
    )
}
