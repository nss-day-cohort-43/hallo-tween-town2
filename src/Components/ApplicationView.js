import React from "react"
import { Route } from "react-router-dom"
import { MessageDetail } from "./Messages/MessageDetails"
import { MessageList } from "./Messages/MessageList"
import { MessageProvider } from "./Messages/MessageProvider"
import { TaskProvider } from "./tasks/TaskProvider"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"
import { TaskDetail } from "./tasks/TaskDetail"
import { EventProvider } from "./event/EventProvider";
import { EventList } from "./event/EventList";
import { ArticleDetail } from "./articles/ArticleDetail"
import { ArticleForm } from "./articles/ArticleForm"
import { ArticleProvider } from "./articles/ArticleProvider"
import { ArticleList } from "./articles/ArticleList"
import { Home } from "./Home"
import { MessageForm } from "./Messages/MessageForm"

export const ApplicationViews = (props) => {
    return (
        <>
                <Route exact path="/">
                    <Home />
                </Route>

            <MessageProvider>
                <Route exact path="/messages">
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
                    <MessageForm />
                </Route>
            </MessageProvider>

            <MessageProvider>
                <Route exact path="/messages/create">
                    <MessageForm />
                </Route>
            </MessageProvider>

        {/* all articles */}
            <ArticleProvider>
                <Route exact path="/articles">
                    <ArticleList />
                </Route>
            </ArticleProvider>
        {/* article details */}
            <ArticleProvider>
                <Route exact path="/articles/detail/:articleId(\d+)">
                    <ArticleDetail />
                </Route>
            </ArticleProvider>
        {/* edit articles */}
            <ArticleProvider>
                <Route exact path="/articles/edit/:articleId(\d+)">
                    <ArticleForm />
                </Route>
            </ArticleProvider>
        {/* new article  */}
            <ArticleProvider>
                <Route exact path="/articles/create">
                    <ArticleForm />
                </Route>
            </ArticleProvider>

            <TaskProvider>
                <Route exact path="/tasks">
                    <TaskList />
                </Route>
            </TaskProvider>

            <TaskProvider>
                <Route exact path="/tasks/create">
                    <TaskForm />
                </Route>
            </TaskProvider>

            <TaskProvider>
                <Route exact path="/tasks/edit/:taskId(\d+)">
                    <TaskForm />
                </Route>
            </TaskProvider>

            <TaskProvider>
                <Route exact path="/tasks/detail/:taskId(\d+)">
                    <TaskDetail />
                </Route>
            </TaskProvider>

            <EventProvider>
                <Route path="/events">
                    <EventList />
                </Route>
            </EventProvider>
        </>
    )
}
