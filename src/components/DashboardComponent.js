import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../contexts/AuthContext";
import eventService from "../service/eventService";
import "../styles/dashboard.css";
import EventCard from "./EventCard";

const DashboardComponent = () => {
  const [events, setEvents] = useState([]);
  const { currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
    const getEvents = async () => {
      try {
        const response = await eventService.getEvents();
        setEvents(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getEvents();
  }, [currentUser]);

  const handleSeeMore = (event) => {
    history.push(`/events/${event.id}`)
  }

  return (
    <div className="container">
      {events.map((val, key) => {
        return <EventCard event={val} key={key} handleSeeMore={handleSeeMore} />
      })}
    </div>
  );
};

export default DashboardComponent;
