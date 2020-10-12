import React from "react";
import { Route } from "react-router-dom";
import { MessageList } from "./Messages/MessageList";
import { MessageProvider } from "./Messages/MessageProvider";
import { EventProvider } from "./event/EventProvider";
import { EventList } from "./event/EventList";

export const ApplicationViews = props => {
  return (
    <>
      <MessageProvider>
        <Route path="/">
          <MessageList />
        </Route>
      </MessageProvider>

      <EventProvider>
        <Route exact path="/">
          <EventList />
        </Route>
      </EventProvider>

      <EventProvider>
        <Route exact path="/events/create">
          <EventList />
        </Route>
      </EventProvider>
    </>
  );
};
