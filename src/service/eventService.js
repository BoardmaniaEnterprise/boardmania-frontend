import axios from "../axios/axios";
import { createEventDto } from "../dto/CreateEventDto";
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

const createEvent = async (eventData) => {
    try {
        console.log("Service", eventData);
        const token = localStorage.getItem('access_token');
        const response = await axios.post(EVENTS_PATH, new createEventDto(eventData), {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response;
    } catch (error) {
        console.error(error);
    }
}

export default { getEvents, createEvent };