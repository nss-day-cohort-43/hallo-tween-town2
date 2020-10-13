import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";
import moment from "moment";

export const EventCard = ({ event }) => (
  <section className="event">
    <h3 className="event__name">
      <Link to={`events/detail/${event.id}`}>{event.name}</Link>
    </h3>
    <div className="event__date">
      <h4>
        Date: {moment(event.date).format("MMMM Do YYYY")}--
        {moment(event.date)
          .startOf("day")
          .fromNow()}
      </h4>
    </div>
    {/* <div className="event__location">Location:{event.location}</div> */}
    <br></br>
  </section>
);
