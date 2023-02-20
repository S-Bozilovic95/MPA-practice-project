import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

const Error = () => {
  const error = useRouteError();

  return (
    <PageContent title="An error occured!">
      <p>Something went wrong!</p>
      <p>{error.message}</p>
    </PageContent>
  );
};

export default Error;
