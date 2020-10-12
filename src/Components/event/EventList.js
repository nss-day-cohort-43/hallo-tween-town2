import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider";
import { EventCard } from "./EventCard";
import "./Event.css";
import { useHistory } from "react-router-dom";

export const EventList = () => {
  const { events, getEvents } = useContext(EventContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    getEvents();
  }, []);

  const history = useHistory();
  return (
    <>
      <h2>Events</h2>
      <button
        onClick={() => {
          history.push("/events/create");
        }}
      >
        Add Event
      </button>
      <div className="events">
        <h2>Events</h2>
        {events.map(event => {
          return <EventCard key={event.id} event={event} />;
        })}
      </div>
    </>
  );
};
