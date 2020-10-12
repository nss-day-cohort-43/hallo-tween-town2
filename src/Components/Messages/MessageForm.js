import React, { useContext, useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { MessageContext } from './MessageProvider'

export const MessageForm = (props) => {
    const { addMessage, getMessageById, updateMessage } = useContext(MessageContext)

    const [message, setMessage] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { messageId } = useParams();
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.name] = event.target.value
        setMessage(newMessage)
    }

    useEffect(() => {
        if (messageId) {
            getMessageById(messageId)
                .then(message => {
                    setMessage(message)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    const constructMessageObject = () => {
        setIsLoading(true);
        if (messageId) {
            updateMessage({
                id: message.id,
                message: message.message,
                date: message.date,
                userId: message.userId
            })
                .then(() => history.push(`/messages/detail/${message.id}`))
        } else {
            addMessage({
                message: message.message,
                date: message.date,
                userId: parseInt(localStorage.getItem("werewolf_user"))
            })
                .then(() => history.push("/messages"))
        }
    }

    return (
        <form className="messageForm">
            <h2 className="messageForm__title">New Message</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="messageMessage">Type your message here: </label>
                    <input type="text" id="messageMessage" name="message" value={message.message} required autoFocus className="form-control"
                        placeholder="Message name"
                        onChange={handleControlledInputChange}
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="messageDate">Date of event: </label>
                    <input type="date" id="messageDate" name="date" value={message.date} required className="form-control"
                        onChange={handleControlledInputChange}
                        />
                </div>
            </fieldset>
            <button type="submit"
                className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructMessageObject()
                }}>
                {messageId ? <>Save Message</> : <>Add Message</>}</button>
        </form>
    )
}