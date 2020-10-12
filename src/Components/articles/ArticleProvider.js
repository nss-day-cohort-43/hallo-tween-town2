import React, {useState, createContext} from "react"

export const ArticleContext = createContext()

//establish the data that can be used

export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([])
        
        //get articles from API
        const getArticles = () => {
            return fetch("://localhost:8088/articles")
            .then(res => res.json())
            .then(setArticles)
        }

        const addArticle = articleObj => {
            return fetch("http://localhost:8088/articles", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(articleObj)
            })
            .then(getArticles)
        }

            const getArticleById = (id) =>{
                return fetch(`http://localhost:8088/articles/${id}`)
                .then(res=>res.json())
            }

            const deleteArticle = artcileId => {
                return fetch(`http://localhost:8088/articles/${articleId}`, {
                method: "DELETE"
                })
                .then(getArticles)
            }
            const editArticle = article => {
                return fetch(` http://localhost:8088/articles/${article.id}`,{
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(article)
                })
                .then(getArticles)
            }

        //return a context provider which has the functions as keys
        //so any child element can see them.
        return(
            <ArticleContext.Provider value={{
                articles, getArticles, addArticle, getArticleById, deleteArticle, editArticle
            }}>
                {props.children}
            </ArticleContext.Provider>
        )
        
}