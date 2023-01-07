import axios from "../axios/axios";
const GAMES_PATH = "/games"

const token = localStorage.getItem('access_token');

const getGames = async () => {
    return await axios.get(GAMES_PATH, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export default { getGames };