import axios from "axios";
import { redirect, useLoaderData, useRouteLoaderData } from "react-router-dom";
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

export const deleteEventAction = async ({ params }) => {
  try {
    await axios.delete(`http://localhost:8080/events/${params.eventId}`);
    return redirect("/events");
  } catch (err) {
    const errorObj = { message: err.message, status: err.response.status };
    throw errorObj;
  }
};

const EventDetailPage = () => {
  // const data = useLoaderData()
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;
