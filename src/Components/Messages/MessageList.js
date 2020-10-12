import React, { useContext, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"


export const MessageList = () => {
   // This state changes when `getMessages()` is invoked below
    const { messages, getMessages } = useContext(MessageContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getMessages()
		
    }, [])


    return (	
		<div className="message">
		    {console.log("MessageList: Render")}
        {
			messages.map(message => {
				return <MessageCard key={message.id} message={message} />
			})
        }
        </div>
    )
}