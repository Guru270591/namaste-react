import { useRouteError } from "react-router";

const Error = () => {
  let err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOps !!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
      <h2>{err.data}</h2>
    </div>
  );
};

export default Error;
