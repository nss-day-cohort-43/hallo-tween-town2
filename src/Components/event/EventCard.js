import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { Card } from "semantic-ui-react";

export const EventCard = ({ event }) => (
  <Card>
    <Card.Content>
      <section className="event">
        <Card.Header>
          <h3 className="event__name">
            <Link to={`events/detail/${event.id}`}>{event.name}</Link>
          </h3>
        </Card.Header>
        <Card.Content>
          <div className="event__date">
            <h4>
              {moment(event.date).format("MMMM Do YYYY")}--
              {moment(event.date)
                .startOf("day")
                .fromNow()}
            </h4>
          </div>
          {/* <div className="event__location">Location:{event.location}</div> */}
          <br></br>
        </Card.Content>
      </section>
    </Card.Content>
  </Card>
);
