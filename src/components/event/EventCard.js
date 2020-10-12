import React from "react";
import "./Event.css";

export const EventCard = ({ event }) => (
  <section className="event">
    <h3 className="event__name">Event Name: {event.name}</h3>
    <div className="event__date">Date: {event.date} </div>
    <div className="event__location">Location:{event.location}</div>
    <br></br>
  </section>
);
