import axios from "../axios/axios";
const GAMES_PATH = "/games"

const getGames = async () => {
    const token = localStorage.getItem('access_token');
    return await axios.get(GAMES_PATH, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export default { getGames };