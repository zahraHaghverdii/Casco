"use client";
import ErrorServerPage from "./_ui/ErrorServerPage";

function Error({ error, reset }) {
  console.log(error);

  return <ErrorServerPage error={error.message} reset={reset} />;
}

export default Error;
