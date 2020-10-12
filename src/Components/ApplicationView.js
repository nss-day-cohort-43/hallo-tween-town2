import React from "react"
import { Route } from "react-router-dom"
import { MessageList } from "./Messages/MessageList"
import { MessageProvider } from "./Messages/MessageProvider"
import { TaskProvider } from "./tasks/TaskProvider"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"
import { TaskDetail } from "./tasks/TaskDetail"


export const ApplicationViews = (props) => {
    return (
        <>
            <MessageProvider>
                <Route path="/">
                    <MessageList />
                </Route>
            </MessageProvider>

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
                <Route path="/tasks/edit/:taskId(\d+)">
                    <TaskForm />
                </Route>
            </TaskProvider>

            <TaskProvider>
                <Route exact path="/tasks/detail/:taskId(\d+)">
                    <TaskDetail />
                </Route>
            </TaskProvider>
        </>
    )
}