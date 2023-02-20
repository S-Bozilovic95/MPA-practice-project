import axios from "axios";
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export const eventsLoader = async () => {
  try {
    const response = await axios.get("http://localhost:8080/events");
    const resData = await response.data;
    return resData;
  } catch (err) {
    // if (err.response) {
    //   console.log(err.response);
    //   console.log(err.message);
    // }
    const errorObj = { message: err.message, status: err.response.status };
    throw errorObj;
  }
};

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
