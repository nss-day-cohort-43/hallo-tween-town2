import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useHistory, useParams } from "react-router-dom"

export const ArticleForm = () => {
    const { addArticle, getArticleById, editArticle } = useContext(ArticleContext)
    const [article, setArticle] = useState({ title: "", date: "", synopsis: "", url: ""})
    const [isLoading, setIsLoading] = useState(true);
    const { articleId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newArticle = { ...article }
        newArticle[event.target.name] = event.target.value
        setArticle(newArticle)
    }

    useEffect(() => {
        if (articleId) {
            console.log("id", articleId)
            getArticleById(articleId)
                .then(article => {
                    setArticle(article)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    const constructArticleObj = () => {
        setIsLoading(true);
            if (articleId) {
                editArticle({
                    id: article.id,
                    title: article.title,
                    date: article.date,
                    synopsis: article.synopsis,
                    url: article.url,
                    userId: parseInt(localStorage.getItem("werewolf_user"))
                })
                    .then(() => history.push(`/articles/detail/${article.id}`))
            } else {
                addArticle({
                    title: article.title,
                    date: article.date,
                    synopsis: article.synopsis,
                    url: article.url,
                    userId: parseInt(localStorage.getItem("werewolf_user"))
                })
                .then(() => history.push("/articles"))
            }
        }
    
    return (
        <form className="articleForm">
            <h2 className="articleForm__title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleTitle">Article title:</label>
                    <input type="text" id="title" name="title" value={article.title} required autoFocus className="form-control"
                        placeholder="Article title"
                        onChange={handleControlledInputChange}
                        
                       />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleDate">Date:</label>
                    <input type="date" id="articleDate" name="date" value={article.date} required autoFocus className="form-control"
                        placeholder="Date"
                        onChange={handleControlledInputChange}
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleSynopsis">Synopsis:</label>
                    <input type="text" id="articleSynopsis" name="synopsis" value={article.synopsis} required autoFocus className="form-control"
                        placeholder="Article synopsis"
                        onChange={handleControlledInputChange}
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleUrl">Article URL:</label>
                    <input type="text" id="articleURL" name="url" value={article.url} required autoFocus className="form-control"
                        placeholder="Article URL"
                        onChange={handleControlledInputChange}
                         />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructArticleObj()
                }}>
            {articleId ? <>Save Article</> : <>Add Article</>}</button>
        </form>
    )
        }