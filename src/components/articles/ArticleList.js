import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom"
import { ArticleCard } from "./ArticleCard";
import {deleteArticle, getAllArticles} from "../modules/ArticleManager";
import "./ArticleList.css"
import { CurrentWeatherCard} from "../weather/WeatherCard"
import { getCurrentWeather } from '../modules/WeatherManager'

export const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [weatherObj, setWeather] = useState({});

    const getArticles = () => {
        return getAllArticles().then(articlesFromAPI =>{
            setArticles(articlesFromAPI)
        });
    };
    
    const history = useHistory();

    useEffect(() => {
        getArticles();
        handleShowWeather();
    },[]);
    
    const handleDeleteArticle = id => {
        deleteArticle(id)
        .then(()=>getAllArticles().then(setArticles));
    };
    
    const handleShowWeather = () => {
    //     getCurrentWeather()
    //     .then(weatherFromAPI => setWeather(weatherFromAPI))
    const weather = getCurrentWeather()
    setWeather(weather) 
    }

        return(
            <>
            <div className="article_cards">
                    <button type="button" className="btn" onClick={() => {history.push("/create")}}>
                    New Article
                    </button>
                    <div className="article-list">
                {articles.map(article => <ArticleCard key={article.id} article={article} handleDeleteArticle={handleDeleteArticle}/>)}
                </div>
            </div>
            {weatherObj.weather?<CurrentWeatherCard weatherObj={weatherObj} /> : null}
            </>
        );
};
