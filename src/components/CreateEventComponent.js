import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../contexts/AuthContext";
import eventService from "../service/eventService";
import "../styles/dashboard.css";
import { Button } from "react-bootstrap";

const CreateEventComponent = () => {
    const { currentUser } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (!currentUser) {
            history.push("/login");
        }
    }, []);
};

export default CreateEventComponent;