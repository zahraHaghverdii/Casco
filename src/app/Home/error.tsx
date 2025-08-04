"use client";
import ErrorServerPage from "@/ui/ErrorServerPage";
import React from "react";

type TError = {
  error: React.ReactNode;
  reset: () => React.ReactNode;
};

function Error({ error, reset }: TError) {
  console.log(error);

  return <ErrorServerPage error={error} reset={reset} />;
}

export default Error;
