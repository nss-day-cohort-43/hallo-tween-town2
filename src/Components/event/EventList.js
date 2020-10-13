import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider";
import { EventCard } from "./EventCard";
import "./Event.css";
import { useHistory } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export const EventList = () => {
  const { events, getEvents } = useContext(EventContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    getEvents();
  }, []);

  const history = useHistory();
  return (
    <>
      <Header as="h1">Events</Header>
      <Button
        primary
        onClick={() => {
          history.push("/events/create");
        }}
      >
        Add Event
      </Button>
      <div className="events">
        {events.map(event => {
          return <EventCard key={event.id} event={event} />;
        })}
      </div>
    </>
  );
};
