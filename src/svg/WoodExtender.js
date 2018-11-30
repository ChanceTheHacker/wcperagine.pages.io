import React from "react";
import "../css/svg/woodExtender.css";

function woodExtender(props) {
  const { index } = props;
  const woodId = `wood${index}`;
  const woodRectId = `woodRect${index}`;
  const woodTopId = `woodTop${index}`;
  const woodBotId = `woodBot${index}`;

  return (
    <div>
      <svg
        id={woodTopId}
        width="31"
        height="346"
        viewBox="0 0 31 346"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          id={woodId}
          x="1.72644"
          y="1.98405"
          width="28"
          height="343"
          rx="9"
        />
      </svg>
      <svg
        id={woodBotId}
        width="31"
        height="346"
        viewBox="0 0 31 346"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          id={woodRectId}
          x="1.72644"
          y="1.98405"
          width="28"
          height="343"
          rx="9"
        />
      </svg>
    </div>
  );
}

export default woodExtender;
