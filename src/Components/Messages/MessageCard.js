import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useHistory, useParams } from 'react-router-dom';
import { Button, Card, Icon } from "semantic-ui-react"
import "./Message.css"

export const MessageCard = ({ message }) => {
    const history = useHistory()

    const { getMessages, deleteMessage, updateMessage } = useContext(MessageContext)

    // useEffect(() => {
    //     if (messageId) {
    //         getMessageById(messageId)
    //             .then(message => {
    //                 setMessage(message)
    //                 setIsLoading(false)
    //             })
    //     } else {
    //         setIsLoading(false)
    //     }
    // }, [])

    const buttonShow = (() => {
        if (message.user.id === parseInt(localStorage.getItem("werewolf_user")))
            return (
                <>
                    <Button onClick={
                        () => {
                            deleteMessage(message.id)
                                .then(() => {
                                    history.push("/messages")
                                })
                        }}><Icon name="trash" />
                    </Button>
                    <Button onClick={() => {
                        history.push(`/messages/edit/${message.id}`)
                    }}><Icon name="edit" />
                    </Button>
                </>
            )
    })

    return (
        <Card className="messageBox">
            <Card.Content className="messageContainer">
                <div className="message">{message.user.username} - {message.message}</div>
                <div className="message__date">{message.date}</div>
            </Card.Content>
            <Card.Content className="buttons">
                {buttonShow()}
            </Card.Content>
        </Card>
    )
}
