import React, {useContext, useEffect, useState} from "react"
import {ArticleContext} from "./ArticleProvider"
import {useHistory, useParams} from "react-router-dom"
import "./Article.css"

export const ArticleDetail = () => {
    const { getArticleById, deleteArticle} = useContext(ArticleContext)
    const [article, setArticle] = useState({})
    const {articleId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getArticleById(articleId)
        .then((response) => {
            setArticle(response)
        })
    }, [])

    // const ShowButtons =(taco) => {
    //     if(parseInt(sessionStorage.getItem("werewolf_user")) === taco.userId) {
    //         return (
    //             <button onClick={ () => {
	// 				deleteArticle(article.id)
	// 					.then(() => {
	// 						history.push("/articles")
	// 					})}}>Delete</button>
    //         <button onClick={() => {
	// 			history.push(`/articles/edit/${article.id}`)
	// 		}}>Edit</button>
    //         )
    //     }else{
    //         return ""
    //     }
    // }

    return(
        <section className="article">
            <button onClick={() => {history.push("/articles")}}>
            Go back
        </button>
            <h3 className="article-title">{article.title}</h3>
            <div className="article-date">{article.date}</div>
            <div className="article-synopsis">{article.synopsis}</div>
            <div className="article-url">{article.url}</div>
            
        </section>
    )

} 
