import React, { useContext, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import { useHistory } from "react-router-dom"
import { MessageForm } from "./MessageForm"
import {Button} from "semantic-ui-react"
import "./Message.css"
import {Grid } from 'semantic-ui-react'


export const MessageList = () => {
    // This state changes when `getMessages()` is invoked below
    const { messages, getMessages } = useContext(MessageContext)
    const history = useHistory()

    //useEffect - reach out to the world for something
    useEffect(() => {
        getMessages()

    }, [])

    return (
        <div className="messagezzz">
            <h2>Messages</h2>
            <Grid container columns={1}>
                   <Grid.Row>
            {
                messages.map(message => {
                    return <Grid.Column><MessageCard key={message.id} user={message.user.name} message={message} /></Grid.Column>
                })
            }  
             </Grid.Row>
            </Grid>

            <Button onClick={() => {history.push("/messages/create")}}>
                New Message
            </Button>          
        </div>
    )
}