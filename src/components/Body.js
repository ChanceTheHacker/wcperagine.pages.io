import React from "react";
import "../css/body.css";
import First from "./body/First";
import Second from "./body/Second";
import Third from "./body/Third";
import Fourth from "./body/Fourth";
import GearBackground from "../svg/GearBackground";
import GearOne from "../svg/GearOne";
import GearTwo from "../svg/GearTwo";
import GearThree from "../svg/GearThree";
import GearFour from "../svg/GearFour";
import WoodExtender from "../svg/WoodExtender";
import Screw from "../svg/Screw";
import Claw from "../svg/Claw";
import PipeBackground from "../svg/PipeBackground";

function Body(props) {
  return (
    <div>
      <div id="body" />

      <GearBackground />
      <GearOne />
      <GearTwo />
      <GearThree />
      <GearFour />

      <First />

      <div id="clawPlaceholder" />
      <WoodExtender index="1" />
      <WoodExtender index="2" />
      <WoodExtender index="3" />
      <WoodExtender index="4" />
      <WoodExtender index="5" />
      <Claw index="1" />
      <Screw index="1" />
      <Screw index="2" />
      <Screw index="3" />
      <Screw index="4" />
      <Screw index="5" />
      <Screw index="6" />
      <Screw index="7" />
      <Screw index="8" />
      <Screw index="9" />
      <Screw index="10" />
      <Screw index="11" />
      <Screw index="12" />
      <Screw index="13" />

      <Second />

      <PipeBackground />

      <Third />
      <Fourth />
    </div>
  );
}
export default Body;
