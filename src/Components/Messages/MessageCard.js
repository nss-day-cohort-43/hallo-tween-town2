import React from "react"

export const MessageCard = ({ message, user }) => (
    <section className="message">
        <h3 className="message__content">{message.message}</h3>
        {/* <p className="message__user">{user.name}</p> */}
        <p className="message__date">{message.date}</p>
    </section>
)
