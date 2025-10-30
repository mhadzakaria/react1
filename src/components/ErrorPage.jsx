import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  console.log(error);
  
  return <div>Maaf, error nih! ({error.statusText})</div>
}

export default ErrorPage;