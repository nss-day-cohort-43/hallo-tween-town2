import React, { useState, createContext } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const EventContext = createContext();

/*
 This component establishes what data can be used.
 */
export const EventProvider = props => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    return fetch("http://localhost:8088/events?_expand=user")
      .then(res => res.json())
      .then(setEvents);
  };

  const addEvents = eventObj => {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventObj)
    }).then(getEvents);
  };

  return (
    <EventContext.Provider
      value={{
        events,
        getEvents,
        addEvents
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};
