import React from "react"
import "./Article.css"
import { Link } from "react-router-dom"
import {Card} from 'semantic-ui-react'


export const ArticleCard = ({ article }) => (
    <Card>
        <Card.Content>
    <section className="article">
    <Card.Header>
        <h3 className="article_title">
            <Link to={`articles/detail/${article.id}`}>
                {article.title}
            </Link>
        </h3>
        </Card.Header><Card.Content>
        <div className="article_date">{article.date}</div>
        </Card.Content>

    </section>
    </Card.Content>
        </Card>
        
)