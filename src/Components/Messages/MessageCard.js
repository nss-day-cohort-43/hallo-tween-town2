import React from "react"
import { Link } from "react-router-dom"

export const MessageCard = ({ message }) => (
    <section className="message">
        <Link to={`/messages/detail/${message.id}`}>
            <h3 className="message__content">{message.message}</h3>
        </Link>
            <p className="message__user">{message.user.username}</p>
            <p className="message__date">{message.date}</p>
        
    </section>
)
