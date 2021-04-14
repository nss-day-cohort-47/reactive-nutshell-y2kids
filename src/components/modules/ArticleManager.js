const remoteURL = "http://localhost:8088"

export const getArticlesById = (articleId) => {
    return fetch(`${remoteURL}/${articleId}`)
    .then(res =>res.json())
}

export const getAllArticles = () => {
    return fetch(`${remoteURL}/articles`)
    .then(res => res.json())
}

export const deleteArticle = (id) => {
    return fetch(`${remoteURL}/articles/${id}`,{
        method: "DELETE"
    }).then(result =>result.json())
}

export const addArticle = (newArticle) => {
    return fetch(`${remoteURL}/articles`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newArticle)
    }).then(res => res.JSON)
}