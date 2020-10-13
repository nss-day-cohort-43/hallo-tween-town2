import React from "react"
import { Link } from "react-router-dom"
import { formatRelative, subDays } from 'date-fns'

export const MessageCard = ({ message }) => (
    <section className="message">
        <Link to={`/messages/detail/${message.id}`}>
            <h3 className="message__content">{message.message}</h3>
        </Link>
            <div className="message__user">{message.user.username}</div>
            <div className="message__date">{formatRelative(subDays(new Date(message.date), 0), new Date())}</div>
        
    </section>
)
