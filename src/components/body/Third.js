import React from "react";
import "../../css/body/third.css";
import PostgresLogo from "../../svg/PostgresLogo";
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
          <ul id="skillsGrid">
            <li className="skillText">Javascript</li>
            <li className="skillIcon">
              <FaJs />
            </li>
            <li className="skillText">CSS3</li>
            <li className="skillIcon">
              <FaCss3 />
            </li>
            <li className="skillText">HTML5</li>
            <li className="skillIcon">
              <FaHtml5 />
            </li>
            <li className="skillText">React</li>
            <li className="skillIcon">
              <FaReact />
            </li>
            <li className="skillText">PostgreSQL</li>
            <li className="skillIcon">
              <PostgresLogo />
            </li>
            <li className="skillText">Linux</li>
            <li className="skillIcon">
              <FaLinux />
            </li>
            <li className="skillText">NodeJS & npm</li>
            <li className="skillIcon">
              <FaNodeJs /> <FaNpm />
            </li>
            <li className="skillText">GitHub</li>
            <li className="skillIcon">
              <FaGithub />
            </li>
          </ul>
        </article>
      </div>
      <div id="contactMeLoc" />
    </div>
  );
}
export default Third;
