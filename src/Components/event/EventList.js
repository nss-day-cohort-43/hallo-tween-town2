import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider";
import { EventCard } from "./EventCard";
import "./Event.css";
import { useHistory } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";
import {Grid } from 'semantic-ui-react'


export const EventList = () => {
  const { events, getEvents } = useContext(EventContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    getEvents();
  }, []);

  const history = useHistory();
  return (
    <>
      
      
      <div className="eventTitleButton">
        <h2>Events</h2>
      <Button
        primary
        onClick={() => {
          history.push("/events/create");
        }}
      >
        Add Event
      </Button></div>
      <Grid container columns={3}>
        <Grid.Row>
          
        {events.map(event => {
          return <Grid.Column><EventCard key={event.id} event={event} /></Grid.Column>;
        })}
      
      
      </Grid.Row>
      </Grid>
    </>
  );
};
