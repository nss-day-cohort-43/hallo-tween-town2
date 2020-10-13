import React from "react"
import { Link } from "react-router-dom"
import "./Message.css"
import {Card} from 'semantic-ui-react'

export const MessageCard = ({ message }) => (
    <Card>
    <Card.Content>
        
    <section className="message">
    <Card.Header>
        <Link to={`/messages/detail/${message.id}`}>
            <h3 className="message__content">{message.message}</h3>
        </Link>
        </Card.Header><Card.Content>
            <p className="message__user">{message.user.username}</p>
            <p className="message__date">{message.date}</p>
            </Card.Content>
    </section>
    </Card.Content>
    </Card>
)
