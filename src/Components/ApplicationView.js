import React from "react"
import { Route } from "react-router-dom"
import { MessageList } from "./Messages/MessageList"
import { MessageProvider } from "./Messages/MessageProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <MessageProvider>
                <Route path="/">
                    <MessageList />
                </Route>
            </MessageProvider>
        </>
    )
}