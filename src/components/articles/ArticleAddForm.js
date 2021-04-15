import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {addArticle} from "../modules/ArticleManager";

export const ArticleAddForm = () => {

    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));
    const timeStamp = Date.now();

    const [article, setArticle] = useState({
        userId:currentUser,
        url:"",
        title: "",
        synopsis: "",
        timestamp:new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timeStamp)
        });
    
     const [isLoading, setIsLoading] = useState(false);
    
     const history = useHistory();
    
    const handleControlledInputChange = (event) => {

        const newArticle = { ...article }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers.
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newArticle[event.target.id] = selectedVal
        // update state
        setArticle(newArticle)
    }
    
    const handleClickSaveArticle = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
        setIsLoading(true)
        // currentUserId:  parseInt(sessionStorage.getItem("nutshell_user")
        const title = article.title
        const synopsis= article.synopsis
        const url = article.url
        if (title === "" || synopsis === "" || url === ""){
            window.alert("Please input more information")
        } else{
            addArticle(article)
            .then(() => history.push("/"))
        }
    }
    
    return (
        <form className="articleForm">
                <h2 className="articleForm__title">New Article</h2>
            <fieldset>
                <div>
                    <label>News Title:</label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="from-control" placeholder="Article Title" value={article.title} />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Synopsis:</label>
                    <input type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Synopsis" value={article.synopsis}/>
                
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>URL:</label>
                    <input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="URL" value={article.url}/>
                </div>
            </fieldset>
                <button className="btn btn-primary" onClick={handleClickSaveArticle}>Save Article</button>
        </form>
        )
    };