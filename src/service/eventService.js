import axios from "../axios/axios";

const EVENTS_PATH = "/events";
let retry_count = 0;

const getEvents = async () => {
  try {
    const token = localStorage.getItem("access_token");
    return await axios.get(EVENTS_PATH, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
    if (retry_count < 5) {
      retry_count++;
      setTimeout(getEvents, 500);
    }
  }
};

export default { getEvents };
