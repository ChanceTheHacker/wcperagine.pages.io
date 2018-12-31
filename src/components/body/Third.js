import React from "react";
import "../../css/body/third.css";
import {
  FaJs,
  FaCss3,
  FaHtml5,
  FaGithub,
  FaFreeCodeCamp,
  FaNpm,
  FaReact,
  FaStackOverflow,
  FaLinux,
  FaNodeJs
} from "react-icons/fa";

function Third(props) {
  return (
    <div id="third">
      <div id="thirdBorder" />
      <div id="thirdContent">
        <div id="skillsLoc" />
        <h2 id="skills">Skills</h2>
        <article id="skillsInfo">
          <ul>
            <li className="skillText">Javascript</li>
            <li className="skillText">CSS3</li>
            <li className="skillText">HTML5</li>
            <li className="skillText">React</li>
            <li className="skillText">PostgreSQL</li>
            <li className="skillText">Linux</li>
            <li className="skillText">NodeJS & npm</li>
            <li className="skillText">GitHub</li>
          </ul>
          <FaJs className="skillIcon" />
          <FaCss3 className="skillIcon" />
          <FaHtml5 className="skillIcon" />
          <FaReact className="skillIcon" />
          <FaLinux className="skillIcon" />
          <FaNodeJs className="skillIcon" /> <FaNpm className="skillIcon" />
          <FaGithub className="skillIcon" />
        </article>
      </div>
      <div id="contactMeLoc" />
    </div>
  );
}
export default Third;
