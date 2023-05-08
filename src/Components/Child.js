import React from "react";
import { GrandChild } from "./GrandChild";

export const Child = (props) => {
  return (
    <div>
      <GrandChild name={props.name} />
    </div>
  );
};
