import axios from "../axios/axios";
const EVENTS_PATH = "/events"
let counter = 0;

const getEvents = async () => {
    try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(EVENTS_PATH, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        if(counter < 5) {
            counter ++;
            console.log("Retrying...")
            setTimeout(getEvents, 500);
        }
    }
}

export default { getEvents };