import React from "react"
import "./Article.css"
import { Link } from "react-router-dom"

export const ArticleCard = ({ article }) => (
    <section className="article">
        <h3 className="article_title">
            <Link to={`articles/detail/${article.id}`}>
                {article.title}
            </Link>
        </h3>
        <div className="article_date">{article.date}</div>
    </section>
)