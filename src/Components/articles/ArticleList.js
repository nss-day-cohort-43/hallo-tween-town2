import React, {useContext, useEffect} from "react"
import {ArticleContext} from "./ArticleProvider"
import {useHistory} from "react-router-dom"

export const ArticleList = () =>{
    //articles is set by getArticles when it is invoked
    const {articles, getArticles} = useContext(ArticleContext)

    useEffect(() => {
        getArticles()
    }, [])
    const history = useHistory()

    return(
        <>
            <h2>Articles</h2>
            <div className="articles">
                {articles.map(article =>{
                    return<ArticleCard key={article.id} article={article}/>
                })}
            </div>
            </>
    )

}