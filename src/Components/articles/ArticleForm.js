import React, {useContext, useEffect, useState} from "react"
import {ArticleContect, ArticleContext} from "./ArticleProvider"
import "./Article.css"
import {useHistory, useParams} from "react-router-dom"

export const ArticleForm = () => {
    const {addArticle, getArticleById, editArticle} = useContext(ArticleContext)
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const {articleId} = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newArticle = { ...article }
        newArticle[event.target.name] = event.target.value
        setArticle(newArticle)
    }

    useEffect(() => {
        if (articleId) {
            getArticleById(articleId)
            .then(article =>{
                setArticle(article)
                setIsLoading(false)
            })
        }else{
            setIsLoading(false)
        }
    }, [])

    const constructArticleObj = () => {
        if(parseInt(article.title) === 0){
            window.alert("Please give your article a title")
        }else {
            setIsLoading(true);
                if(articleObj){
                    editArticle({
                        id: article.id,
                        title: article.name
                    })
                    .then(() =>  history.push(`articles/detail/${article.id}`))
                }else {
                    addArticle({
                        title: article.name
                    }) .then(() => history.push("/articles"))
                }
        }
    }
        return (
            <form className="articleForm">
            <h2 className="articleForm__title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleTitle">Article title:</label>
                    <input type="text" id="articleTitle" name="name" required autoFocus className="form-control" 
                    placeholder="Article title" 
                    onChange={handleControlledInputChange} 
                    defaultValue={article.title}/>
                </div>
            </fieldset>
        )
}