import React, { useContext, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import { useHistory } from "react-router-dom"
import { MessageForm } from "./MessageForm"


export const MessageList = () => {
    // This state changes when `getMessages()` is invoked below
    const { messages, getMessages } = useContext(MessageContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        getMessages()

    }, [])

    const history = useHistory()

    return (
        <div className="message">
            <h2>Messages</h2>
            {
                messages.map(message => {
                    return <MessageCard key={message.id} message={message} />
                })
            }
            <MessageForm></MessageForm>
        </div>
    )
}