import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import "./Event.css";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

export const EventForm = () => {
  const { addEvent, getEventById, editEvent } = useContext(EventContext);
  const [event, setEvent] = useState({ name: "", date: "", location: "" });
  const [isLoading, setIsLoading] = useState(true);
  const { eventId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = e => {
    const newEvent = { ...event };
    newEvent[e.target.name] = e.target.value;
    setEvent(newEvent);
  };

  useEffect(() => {
    if (eventId) {
      getEventById(eventId).then(event => {
        setEvent(event);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const constructEventObj = () => {
    setIsLoading(true);
    if (eventId) {
      editEvent({
        id: event.id,
        name: event.name,
        date: event.date,
        location: event.location,
        userId: parseInt(localStorage.getItem("werewolf_user"))
      }).then(() => history.push(`/events/detail/${event.id}`));
    } else {
      addEvent({
        name: event.name,
        date: event.date,
        location: event.location,
        userId: parseInt(localStorage.getItem("werewolf_user"))
      }).then(() => history.push("/events"));
    }
  };

  return (
    <Form className="eventForm">
      <h2 className="eventForm__title">New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventName">Event name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={event.name}
            required
            autoFocus
            className="form-control"
            placeholder="Event name"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventDate">Date:</label>
          <input
            type="date"
            id="eventDate"
            name="date"
            value={event.date}
            required
            autoFocus
            className="form-control"
            placeholder="Date"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventLocation">Location:</label>
          <input
            type="text"
            id="eventLocation"
            name="location"
            value={event.location}
            required
            autoFocus
            className="form-control"
            placeholder="Event location"
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <Button
        primary
        className="btn btn-primary"
        disabled={isLoading}
        onClick={e => {
          e.preventDefault();
          constructEventObj();
        }}
      >
        {eventId ? <>Save Event</> : <>Add Event</>}
      </Button>
    </Form>
  );
};
