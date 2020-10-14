import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Event.css";
import { Button } from "semantic-ui-react";
import moment from "moment";

export const EventDetail = () => {
  const { getEventById, deleteEvent } = useContext(EventContext);
  const [event, setEvent] = useState({});
  const { eventId } = useParams();
  const history = useHistory();
  const activeUser = sessionStorage.getItem("activeUser");

  useEffect(() => {
    getEventById(eventId).then(response => {
      setEvent(response);
    });
  }, []);
  return (
    <section className="event">
      <Button
        onClick={() => {
          history.push("/events");
        }}
      >
        Go back
      </Button>
      <h3 className="event-name">{event.name}</h3>
      <div className="event-userId">{activeUser}</div>
      <div className="event-date">
        {moment(event.date).format("MMMM Do YYYY")}--
        {moment(event.date)
          .startOf("day")
          .fromNow()}
      </div>
      <div className="event-location">{event.location}</div>
      <br></br>
      <Button
        primary
        onClick={() => {
          deleteEvent(event.id).then(() => {
            history.push("/events");
          });
        }}
      >
        Delete
      </Button>
      <Button
        primary
        onClick={() => {
          history.push(`/events/edit/${event.id}`);
        }}
      >
        Edit
      </Button>
    </section>
  );
};
