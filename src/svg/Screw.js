import React from "react";
import "../css/svg/screw.css";

function screw(props) {
  const { index } = props;
  const screwWrapperId = `screwWrapper${index}`;
  const screwHeadId = `screwHead${index}`;
  const screwNotchId = `screwNotch${index}`;

  return (
    <div>
      <svg
        id={screwWrapperId}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle id={screwHeadId} cx="10" cy="10" r="9.5" />
        <path
          id={screwNotchId}
          d="M9 3H11L12 8L17 9V11L12 12L11 17H9L8 12L3 11V9L8 8L9 3Z"
        />
      </svg>
    </div>
  );
}

export default screw;
