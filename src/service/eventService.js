import axios from "../axios/axios";
const EVENTS_PATH = "/events"

const token = localStorage.getItem('access_token');

const getEvents = async () => {
    return await axios.get(EVENTS_PATH, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export default { getEvents };