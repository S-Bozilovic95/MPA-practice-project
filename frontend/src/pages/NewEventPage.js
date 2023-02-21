import axios from "axios";
import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export const addNewEventAction = async ({ request, params }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  try {
    await axios.post("http://localhost:8080/events", eventData);
    return redirect("/events");
  } catch (err) {
    const errorObj = { message: err.message, status: err.response.status };
    throw errorObj;
  }
};

const NewEventPage = () => {
  return (
    <>
      <EventForm />
    </>
  );
};

export default NewEventPage;
