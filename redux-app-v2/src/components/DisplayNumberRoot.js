import React from "react";
import DisplayNumber from "../containers/DisplayNumber";

const DisplayNumberRoot = (props) => {
  console.log("DisplayNumberRoot");
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber />
    </div>
  );
};

export default DisplayNumberRoot;
