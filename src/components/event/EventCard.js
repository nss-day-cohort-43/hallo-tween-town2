import React from "react";

export const EventCard = ({ event }) => (
  <section className="event">
    <h3 className="event__name">{event.name}</h3>
    <div className="event__date">Date: {event.date} </div>
    <div className="event__location">Location:{event.location}</div>
  </section>
);
