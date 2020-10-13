import React, { useContext, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import { useHistory } from "react-router-dom"
import { MessageForm } from "./MessageForm"


export const MessageList = () => {
    // This state changes when `getMessages()` is invoked below
    const { messages, getMessages } = useContext(MessageContext)
    const history = useHistory()

    //useEffect - reach out to the world for something
    useEffect(() => {
        getMessages()

    }, [])

    return (
        <div className="message">
            <h2>Messages</h2>
            {
                messages.map(message => {
                    return <MessageCard key={message.id} user={message.user.name} message={message} />
                })
            }  
            <button onClick={() => {history.push("/messages/create")}}>
                New Message
            </button>          
        </div>
    )
}