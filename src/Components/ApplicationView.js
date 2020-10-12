import React from "react"
import { Route } from "react-router-dom"
import {Home} from "./Home"
import { ArticleDetail } from "./articles/ArticleDetail"
import { ArticleForm } from "./articles/ArticleForm"
import { ArticleProvider } from "./articles/ArticleProvider"
import { MessageList } from "./Messages/MessageList"
import { MessageProvider } from "./Messages/MessageProvider"
import { ArticleList } from "./articles/ArticleList"
import {EventList} from "./event/EventList"
import {EventProvider} from "./event/EventProvider"

export const ApplicationViews = (props) => {
    return (
        <>
         <Route exact path="/">
                <Home />
            </Route>
            <MessageProvider>
                <Route path="/messages">
                    <MessageList />
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

            <EventProvider>
        <Route exact path="/events">
          <EventList />
        </Route>
      </EventProvider>

        </>
    )
}
