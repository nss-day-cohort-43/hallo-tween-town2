import React, {useContext, useEffect, useState} from "react"
import {ArticleContext} from "./ArticleProvider"
import {useHistory, useParams} from "react-router-dom"
import {Button} from "semantic-ui-react"
import "./Article.css"
import {Card} from 'semantic-ui-react'


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
        <>
       
            <Button primary onClick={() => {history.push("/articles")}}>
            Go back
        </Button>
         
        <Card>
    <Card.Content><section className="article">
        <Card.Header>

            <h3 className="article-title">{article.title}</h3>
            </Card.Header><Card.Content>
            <div className="article-date">{article.date}</div>
            <div className="article-synopsis">{article.synopsis}</div>
            <div className="article-url">{article.url}</div>
            <Button onClick={ () => {
					deleteArticle(article.id)
						.then(() => {
							history.push("/articles")
						})}}>Delete</Button>
            <Button onClick={() => {
				history.push(`/articles/edit/${article.id}`)
			}}>Edit</Button>
            </Card.Content>
            </section>          
        </Card.Content>
  </Card>
  
  </>
    )

} 
