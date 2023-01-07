import React from "react";
import { Button } from "react-bootstrap";
import "../styles/event-card.css";

const GameCard = (props) => {
    const { game, handleSeeMore } = props;
    return (
        <div className="event-card-container">
            <div className="header-container">{game.name}</div>
            <div className="body-container">
                <div>{game.description}</div>
                <div>Minimum Number Of Players: {game.minNumberOfPlayers}</div>
                <div>Maximum Number of Players: {game.maxNumberOfPlayers}</div>
                <div>Url: {game.url}</div>
            </div>
            <div className="footer-container">
                <Button className="btn-primary" onClick={() => handleSeeMore(game)}> See More </Button>
            </div>
        </div>
    );
};

export default GameCard;