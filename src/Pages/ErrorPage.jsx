import {  useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
//   console.error(error);

  return (
    <div id="error-page text-center">
      <div className="text-center font-bold text-2xl">
        <h1>Oops!</h1>
        <p>404 Page not found</p>
      </div>
      <p className="text-center font-bold text-2xl">
        <i>{error.statusText || error.message}</i>
        <br />
        {/* <button className="btn" onClick={() => {<Navigate to={'/'}></Navigate>; console.log('test')}} >Go Back</button> */}
      </p>
    </div>
  );
}