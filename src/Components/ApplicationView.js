import React from "react"
import { Route } from "react-router-dom"
import { MessageDetail } from "./Messages/MessageDetails"
import { MessageList } from "./Messages/MessageList"
import { MessageProvider } from "./Messages/MessageProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <MessageProvider>
                <Route path="/messages">
                    <MessageList />
                </Route>
            </MessageProvider>

            <MessageProvider>
                <Route exact path="/messages/detail/:messageId(\d+)">
                    <MessageDetail />
                </Route>
            </MessageProvider>

            <MessageProvider>
                <Route exact path="/messages/edit/:messageId(\d+)">
                    <MessageDetail />
                </Route>
            </MessageProvider>
        </>
    )
}