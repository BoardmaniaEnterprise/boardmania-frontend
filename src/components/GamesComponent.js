import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAuth } from "../contexts/AuthContext";
import gameService from "../service/gameService";
import "../styles/dashboard.css";
import GameCard from "./GameCard";
import { Button } from "react-bootstrap";

const GamesComponent = () => {
    const [games, setGames] = useState([]);
    const { currentUser } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (!currentUser) {
            history.push("/login");
        }
        const getGames = async () => {
            try {
                const response = await gameService.getGames();
                setGames(response.data);
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }

        getGames();
    }, []);

    const handleSeeMore = (game) => {
        history.push(`/games/${game.id}`)
    }

    return (
        <div className="container">
            {games.map((val, key) => {
                return <GameCard game={val} key={key} handleSeeMore={handleSeeMore} />
            })}
        </div>
    )
};

export default GamesComponent;