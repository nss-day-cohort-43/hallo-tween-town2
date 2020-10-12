import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useHistory, useParams } from "react-router-dom"

export const ArticleForm = () => {
    const { addArticle, getArticleById, editArticle } = useContext(ArticleContext)
    const [article, setArticle] = useState({})
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
                    userId: parseInt(localStorage.getItem("activeUser"))
                })
                    .then(() => history.push(`articles/detail/${article.id}`))
            } else {
                addArticle({
                    id: article.id,
                    title: article.title,
                    date: article.date,
                    synopsis: article.synopsis,
                    userId: parseInt(localStorage.getItem("activeUser"))
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
                    <input type="text" id="articleTitle" title="title" required autoFocus className="form-control"
                        placeholder="Article title"
                        onChange={handleControlledInputChange}
                        defaultValue={article.title} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleDate">Date:</label>
                    <input type="text" id="articleDate" name="date" required autoFocus className="form-control"
                        placeholder="Date"
                        onChange={handleControlledInputChange}
                        defaultValue={article.date} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleSynopsis">Synopsis:</label>
                    <input type="text" id="articleSynopsis" name="synopsis" required autoFocus className="form-control"
                        placeholder="Article synopsis"
                        onChange={handleControlledInputChange}
                        defaultValue={article.synopsis} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="articleUrl">Article URL:</label>
                    <input type="text" id="articleURL" name="url" required autoFocus className="form-control"
                        placeholder="Article URL"
                        onChange={handleControlledInputChange}
                        defaultValue={article.URL} />
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