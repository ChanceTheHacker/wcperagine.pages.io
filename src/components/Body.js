import React from "react";
import "../css/body.css";
import GearOne from "../svg/GearOne";

function Body(props) {
  return (
    <div>
      <div id="body" />
      <GearOne gearIndex={1} />
      <GearOne gearIndex={2} />
      <GearOne gearIndex={3} />
    </div>
  );
}
export default Body;
