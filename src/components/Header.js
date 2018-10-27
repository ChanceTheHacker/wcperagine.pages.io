import React from "react";
import "../css/header.css";

function Header(props) {
  return (
    <div id="headerWrapper">
      <h1 id="header">
        <span id="headerText">
          <span className="fancy">Hi</span>, my name is{" "}
          <span className="fancy">Chance</span>
          <br /> and I <span className="fancy">love</span> coding with{" "}
          <span className="fancy">style</span>
        </span>
      </h1>
    </div>
  );
}
export default Header;
