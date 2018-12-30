import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../../css/body/fourth.css";

function Fourth(props) {
  return (
    <div id="fourth">
      <div id="fourthBorderOne" />
      <div id="fourthBorderTwo" />
      <div id="fourthBorderThree" />
      <div id="fourthContentOne" />
      <div id="fourthContentTwo" />
      <div id="fourthContentThree" >
        <h2 id='contactMe'>
          Contact Me
        </h2>
        <article id="contactMeInfo">
          <FaEnvelope className="icons"/> Chance@chancethehacker.com
        </article>
      </div>
    </div>
  );
}
export default Fourth;
