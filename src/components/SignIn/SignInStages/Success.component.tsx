import React from "react";
import { useSignIn } from "../signin.provider";

const Success = () => {
  const { data } = useSignIn();

  return <div>{JSON.stringify(data)}</div>;
};

export default Success;
