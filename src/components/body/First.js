import React from "react";
import "../../css/body/first.css";

function First(props) {
  return (
    <div id="first">
      <div id="firstBorder" />
      <div id="firstContent">
        <div id="aboutMeLoc" />
        <h2 id="aboutMe">About Me</h2>
        <article id="aboutInfo">
          Currently, I'm a site supervisor for a demolition company, but over
          the past year I've spent every waking hour of my personal time
          teaching myself to code. When I need a break from coding websites, I
          enjoy coding games in c# / c++ or writing unix shell scripts to make
          my life easier. I've also been trying to teach myself to draw because
          it seems like a complementary skill for a web developer. I drew
          everything on this web page myself, except for the icons.
        </article>
      </div>
    </div>
  );
}
export default First;
