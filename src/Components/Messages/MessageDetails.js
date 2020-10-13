import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useParams, useHistory } from "react-router-dom"

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

    const buttonShow = (()=> {
        if (user.id === parseInt(localStorage.getItem("werewolf_user")))
        return (
            <>
            <button onClick={
                () => {
                    deleteMessage(message.id)
                        .then(() => {
                            history.push("/messages")
                        })
                }}>Delete Message
            </button>
            <button onClick={() => {
                history.push(`/messages/edit/${message.id}`)
                }}>Edit
            </button>
            </>
        )
    })

    return (
        <section className="message">
            <h3 className="message__content">{message.message}</h3>
            <div className="message__user">{user.username}</div>
            <p className="message__date">{message.date}</p>
            
            {buttonShow()}
            
            
        </section>

    )
}