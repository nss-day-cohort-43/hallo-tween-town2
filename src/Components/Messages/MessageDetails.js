import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useParams, useHistory } from "react-router-dom"
import {Button} from "semantic-ui-react"
import "./Message.css"

export const MessageDetail = () => {
    const { deleteMessage, getMessageById } = useContext(MessageContext)

    const [message, setMessage] = useState({})
    const [user, setUser] = useState({})

    const { messageId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getMessageById(messageId)
            .then((response) => {
                setMessage(response)
                setUser(response.user)
            })
    }, [])

    return (
        <section className="message">
            <h3 className="message__content">{message.message}</h3>
            <div className="message__user">{user.username}</div>
            <div className="message__date">{message.date}</div>

            <Button onClick={
                () => {
                    deleteMessage(message.id)
                        .then(() => {
                            history.push("/messages")
                        })
                }}>Delete Message
            </Button>
            <Button onClick={() => {
                history.push(`/messages/edit/${message.id}`)
                }}>Edit
            </Button>
        </section>

    )
}