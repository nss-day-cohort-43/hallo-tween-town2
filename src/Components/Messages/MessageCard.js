import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom';
import "./Message.css"
import {Card, Icon} from 'semantic-ui-react'
import { MessageContext } from "./MessageProvider"





export const MessageCard = ({ message }) => {
    const history = useHistory()

    const { getMessages, deleteMessage, updateMessage } = useContext(MessageContext)


    const buttonShow = (() => {
        if (message.user.id === parseInt(localStorage.getItem("werewolf_user")))
            return (
                <>
                    <button onClick={
                        () => {
                            deleteMessage(message.id)
                                .then(() => {
                                    history.push("/messages")
                                })
                        }}><Icon name="trash" />
                    </button>
                    <button onClick={() => {
                        history.push(`/messages/edit/${message.id}`)
                    }}><Icon name="edit" />
                    </button>
                </>
            )
    })

    return (
        <section className="messageBox">
            <section className="messageContainer">
                <div className="message">{message.user.username} - {message.message}</div>
                <div className="message__date">{message.date}</div>
            </section>
            <section className="buttons">
                {buttonShow()}
            </section>
        </section>
    )
}




// export const MessageCard = ({ message }) => (
//     <Card>
//     <Card.Content>
        
//     <section className="message">
//     <Card.Header>
//         <Link to={`/messages/detail/${message.id}`}>
//             <h3 className="message__content">{message.message}</h3>
//         </Link>
//         </Card.Header><Card.Content>
//             <p className="message__user">{message.user.username}</p>
//             <p className="message__date">{message.date}</p>
//             </Card.Content>
//     </section>
//     </Card.Content>
//     </Card>
// )
