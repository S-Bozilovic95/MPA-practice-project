import axios from "axios";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export const getSingleEventLoader = async ({ request, params }) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/events/${params.eventId}`
    );
    const resData = await response.data;
    return resData;
  } catch (err) {
    const errorObj = { message: err.message, status: err.response.status };
    throw errorObj;
  }
};

const EventDetailPage = () => {
  // const data = useLoaderData()
  const data = useRouteLoaderData("event-detail");
  console.log(data);

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;
