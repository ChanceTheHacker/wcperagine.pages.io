import React from "react";
import "../css/header.css";

function Header(props) {
  const isFirefox = /Firefox/.test(props.browser);
  if (isFirefox) {
    return (
      <div id="headerWrapper">
        <h1 id="header">
          <p id="headerText">
            Hi my name is <span className="fancy">Chance</span>
            <br /> and I love using{" "}
            <span className="fancy">{props.browser}</span> too
            <div className="warning">
              However, Firefox does not handle dom animations well. This site
              will have jerky animations while using firefox. Please consider
              using chrome
            </div>
          </p>
        </h1>
      </div>
    );
  } else {
    return (
      <div id="headerWrapper">
        <h1 id="header">
          <p id="headerText">
            <span className="fancy">Hi</span> my name is{" "}
            <span className="fancy">Chance</span>
            <br /> and I <span className="fancy">love</span> coding with{" "}
            <span className="fancy">style</span>
          </p>
        </h1>
      </div>
    );
  }
}
export default Header;
