"use client";
import Error from "../error";

type TError = {
  error: React.ReactNode;
  reset: () => React.ReactNode;
};

export default function error({ error, reset }: TError) {
  return (
    <>
      <p>error</p>
      <Error error={error} reset={reset} />
    </>
  );
}
