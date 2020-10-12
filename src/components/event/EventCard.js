import React from "react";

export const EventCard = event => (
  <section className="event">
    <h3 className="event__name">{event.name}</h3>
    <div className="event__date">Date: {event.date} </div>
    <div className="event__location">Location:{event.location.name}</div>
  </section>
);

// "id": 1,
// "userId": 1,
// "name": "here's the event",
// "date": "10/31/2023",
// "location": "123 road"
