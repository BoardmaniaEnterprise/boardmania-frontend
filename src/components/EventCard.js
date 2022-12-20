import React from 'react'
import "../styles/event-card.css";

const EventCard = props => {
  const { event } = props;  
  return (
    <div className="event-card-container">
        <div className='header-container'>{event.name}</div>
        <div>{event.description}</div>
        <div>Minimum Trust Score: {event.minTrustScore}</div>
        <div>Maximum Number of Players: {event.maxNumberOfPlayers}</div>
        <div>Desfasurare: {event.online ? "Online" : "Fizic"}</div>
        <div>Location: {event.location}</div>
    </div>
  )
}

export default EventCard;