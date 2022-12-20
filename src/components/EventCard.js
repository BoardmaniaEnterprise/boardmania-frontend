import React from "react";
import { Button } from "react-bootstrap";
import "../styles/event-card.css";

const EventCard = (props) => {
  const { event, handleSeeMore } = props;
  return (
    <div className="event-card-container">
      <div className="header-container">{event.name}</div>
      <div className="body-container">
        <div>{event.description}</div>
        <div>Minimum Trust Score: {event.minTrustScore}</div>
        <div>Maximum Number of Players: {event.maxNumberOfPlayers}</div>
        <div>Desfasurare: {event.online ? "Online" : "Fizic"}</div>
        <div>Location: {event.location}</div>
      </div>
      <div className="footer-container"> 
        <Button className="btn-primary" onClick={() => handleSeeMore(event)}> See More </Button>
      </div>
    </div>
  );
};

export default EventCard;
