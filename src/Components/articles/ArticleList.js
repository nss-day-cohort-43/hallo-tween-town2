import React, {useContext, useEffect} from "react"
import {ArticleContext} from "./ArticleProvider"
import {useHistory} from "react-router-dom"
import {ArticleCard} from "./ArticleCard"
import {Button} from "semantic-ui-react"
import "./Article.css"
import {Grid } from 'semantic-ui-react'


export const ArticleList = () =>{
    //articles is set by getArticles when it is invoked
    const {articles, getArticles} = useContext(ArticleContext)

    useEffect(() => {
        getArticles()
    }, [])
    const history = useHistory()

    return(
            <>
        
        <div className="articlesBox">
            <h2>Articles</h2>
            <Button primary onClick={() => {history.push("/articles/create")}}>
            Add New Article
        </Button></div>
        <Grid container columns={3}>
        <Grid.Row>
                {articles.map(article =>{
                    return<Grid.Column><ArticleCard key={article.id} article={article}/></Grid.Column>
                })}
       </Grid.Row>
      </Grid>
      
      
            </>
    )

} 