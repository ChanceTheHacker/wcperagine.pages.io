import React, { Component } from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import SiteNav from "./components/SiteNav";
import Body from "./components/Body";
import Placeholder from "./components/Placeholder";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navbar: "",
      placeholder: "",
      vh: "",
      vw: "",
      elements: {},
      gears: {},
      wood: {},
      claw: {}
    };
    this.handleScrollAnimation = this.handleScrollAnimation.bind(this);
    this.handleScreenResize = this.handleScreenResize.bind(this);
    this.animateClaw = this.animateClaw.bind(this);
  }

  positionNav() {
    const { navbar } = this.state;
    const windowHeight = window.innerHeight;
    const navHeight = navbar.getBoundingClientRect().height;
    const navOffset = windowHeight - navHeight;
    navbar.style.marginTop = String(navOffset) + "px";
  }

  handleScreenResize() {
    const { placeholder } = this.state;
    const vh = placeholder.getBoundingClientRect().height;
    const vw = placeholder.getBoundingClientRect().width;
    this.setState({
      vh: vh,
      vw: vw
    });
    this.positionNav();
  }

  slideDivs(viewportTop, vh, vw, elements) {
    const { first, second, third, fourth } = elements;

    const firstTop = first.getBoundingClientRect().top;
    const secondTop = second.getBoundingClientRect().top;
    const thirdTop = third.getBoundingClientRect().top;

    let newOffset = 0;

    if (viewportTop > 0 * vh) {
      newOffset = 0 - firstTop / vh - 25;
      if (newOffset > 1) {
        newOffset = 1;
      }
      first.style.left = String(newOffset) + "vw";
    }

    if (viewportTop > 100 * vh) {
      newOffset = secondTop / vh + 25;
      if (newOffset < 0) {
        newOffset = 0;
      }
      second.style.left = String(newOffset) + "vw";
    }

    if (viewportTop > 200 * vh) {
      newOffset = 0 - thirdTop / vh - 25;
      if (newOffset > 1) {
        newOffset = 1;
      }
      third.style.left = String(newOffset) + "vw";
    }

    if (viewportTop > 300 * vh) {
      newOffset = (thirdTop * -2) / vh;
      fourth.style.top = String(550 - newOffset) + "vh";
    }
  }

  spinGears(viewportTop, vh, vw, gears) {
    const { gearOne, gearTwo, gearThree, gearFour } = gears;
    const { gearOneTop, gearOneBot, gearOneNut } = gearOne;
    const { gearTwoTop, gearTwoBot, gearTwoNut } = gearTwo;
    const { gearThreeBot, gearThreeNut } = gearThree;
    const { gearFourBot, gearFourNut } = gearFour;

    const gearHeight = gearOneTop.getBoundingClientRect().top;

    let newRotation = 0;

    if (viewportTop > 0 * vh) {
      newRotation = 10000 + gearHeight / vh;

      gearOneTop.style.transform = `rotate(${newRotation}deg)`;
      gearOneBot.style.transform = `rotate(-${newRotation + 4}deg)`;
      gearOneNut.style.transform = `rotate(-${newRotation + 74}deg)`;

      gearTwoTop.style.transform = `rotate(-${newRotation - 2.5}deg)`;
      gearTwoBot.style.transform = `rotate(${newRotation}deg)`;
      gearTwoNut.style.transform = `rotate(${newRotation}deg)`;

      gearThreeBot.style.transform = `rotate(-${newRotation - 1}deg)`;
      gearThreeNut.style.transform = `rotate(${newRotation}deg)`;

      gearFourBot.style.transform = `rotate(${newRotation + 2.5}deg)`;
      gearFourNut.style.transform = `rotate(-${newRotation + 20}deg)`;
    }
  }

  rotateWood(viewportTop, topOffset, vh, vw, wood) {
    const {
      woodTop1,
      woodTop2,
      woodTop3,
      woodTop4,
      woodTop5,
      woodBot1,
      woodBot2,
      woodBot3,
      woodBot4,
      woodBot5,
      clawWoodLeft,
      clawWoodRight,
      screw1,
      screw2,
      screw3,
      screw4,
      screw5,
      screw6,
      screw7,
      screw8,
      screw9,
      screw10
    } = wood;
    const woodTop = [
      woodTop1,
      woodTop2,
      woodTop3,
      woodTop4,
      woodTop5,
      clawWoodRight
    ];
    const screwTop = [screw1, screw2, screw3, screw4, screw5];
    const woodBot = [
      woodBot1,
      woodBot2,
      woodBot3,
      woodBot4,
      woodBot5,
      clawWoodLeft
    ];
    const screwBot = [screw6, screw7, screw8, screw9, screw10];
    let newRotation;
    let increm;
    let newOffset;
    const topOfWood = viewportTop + woodBot1.getBoundingClientRect().top;
    const botOfWood = viewportTop + woodBot1.getBoundingClientRect().bottom;

    if (topOffset > 0) {
      newRotation = topOffset / -4.5 + 25;
      increm = newRotation * 0.7;
      newOffset = increm - 25;

      woodTop.forEach(elem => {
        elem.style.transform = `rotate(${newRotation}deg)`;
        elem.style.left = `${newOffset}vw`;
        newOffset += increm;
      });

      newOffset = increm - 25;

      woodBot.forEach(elem => {
        elem.style.transform = `rotate(${newRotation * -1}deg)`;
        elem.style.left = `${newOffset}vw`;
        newOffset += increm;
      });

      newOffset = (increm - 16) * 1.5;

      screwTop.forEach(elem => {
        elem.style.left = `${newOffset}vw`;
        elem.style.top = topOfWood + 9 * vw * 0.17;
        newOffset += increm;
      });

      newOffset = (increm - 16) * 1.5;

      screwBot.forEach(elem => {
        elem.style.left = `${newOffset}vw`;
        elem.style.top = botOfWood - 9 * vw * 0.17 - 2.5 * vw;
        newOffset += increm;
      });
    }
    if (topOffset < 0) {
      newRotation = topOffset / 4.5 + 25;
      increm = newRotation * 0.7;
      newOffset = increm - 25;
      woodTop.forEach(elem => {
        elem.style.transform = `rotate(${newRotation}deg)`;
        elem.style.left = `${newOffset}vw`;
        newOffset += increm;
      });

      newOffset = increm - 25;

      woodBot.forEach(elem => {
        elem.style.transform = `rotate(${newRotation * -1}deg)`;
        elem.style.left = `${newOffset}vw`;
        newOffset += increm;
      });

      newOffset = (increm - 16) * 1.5;

      screwTop.forEach(elem => {
        elem.style.left = `${newOffset}vw`;
        elem.style.top = topOfWood + 9 * vw * 0.17;
        newOffset += increm;
      });

      newOffset = (increm - 16) * 1.5;

      screwBot.forEach(elem => {
        elem.style.left = `${newOffset}vw`;
        elem.style.top = botOfWood - 9 * vw * 0.17 - 2.5 * vw;
        newOffset += increm;
      });
    }
  }

  moveClaw(topOffset, vh, vw, claw) {
    const {
      clawLeft,
      clawCenter,
      clawRight,
      clawAttachment,
      screw11,
      screw12,
      screw13
    } = claw;
    let newOffset;

    if (topOffset > 0) {
      newOffset = 100 + topOffset * -1;
    } else {
      newOffset = 100 + topOffset * 1;
    }
    clawAttachment.style.left = `${(newOffset - 18) * 0.9}vw`;
    clawLeft.style.left = `${(newOffset - 2) * 0.9}vw`;
    clawCenter.style.left = `${(newOffset - 2) * 0.9}vw`;
    clawRight.style.left = `${(newOffset - 2) * 0.9}vw`;
    screw11.style.left = `${(newOffset - 13) * 0.9}vw`;
    screw12.style.left = `${(newOffset - 13) * 0.9}vw`;
    screw13.style.left = `${(newOffset - 3) * 0.9}vw`;
  }

  animateClaw(viewportTop) {
    const { rotateWood, moveClaw, state } = this;
    const { vh, vw, wood, claw } = state;
    const { clawPlaceholder } = claw;

    const topOffset = clawPlaceholder.getBoundingClientRect().top / vh;

    if (viewportTop / vh > 100 && viewportTop / vh < 350) {
      rotateWood(viewportTop, topOffset, vh, vw, wood);

      moveClaw(topOffset, vh, vw, claw);
    }
  }

  handleScrollAnimation() {
    const { slideDivs, spinGears, animateClaw, state } = this;
    const { vh, vw, elements, gears } = state;
    const viewportTop = window.scrollY;

    slideDivs(viewportTop, vh, vw, elements);

    spinGears(viewportTop, vh, vw, gears);

    animateClaw(viewportTop);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScrollAnimation);
    window.addEventListener("resize", this.handleScreenResize);

    const placeholder = document.getElementById("placeholder");

    const vh = placeholder.getBoundingClientRect().height;
    const vw = placeholder.getBoundingClientRect().width;

    const navbar = document.getElementById("navbarWrapper");

    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const third = document.getElementById("third");
    const fourth = document.getElementById("fourth");

    const gearOneTop = document.getElementById("gearOneTop");
    const gearOneBot = document.getElementById("gearOneBot");
    const gearOneNut = document.getElementById("gearOneNut");
    const gearTwoTop = document.getElementById("gearTwoTop");
    const gearTwoBot = document.getElementById("gearTwoBot");
    const gearTwoNut = document.getElementById("gearTwoNut");
    const gearThreeBot = document.getElementById("gearThreeBot");
    const gearThreeNut = document.getElementById("gearThreeNut");
    const gearFourBot = document.getElementById("gearFourBot");
    const gearFourNut = document.getElementById("gearFourNut");

    const clawPlaceholder = document.getElementById("clawPlaceholder");

    const woodTop1 = document.getElementById("woodTop1");
    const woodBot1 = document.getElementById("woodBot1");
    const woodTop2 = document.getElementById("woodTop2");
    const woodBot2 = document.getElementById("woodBot2");
    const woodTop3 = document.getElementById("woodTop3");
    const woodBot3 = document.getElementById("woodBot3");
    const woodTop4 = document.getElementById("woodTop4");
    const woodBot4 = document.getElementById("woodBot4");
    const woodTop5 = document.getElementById("woodTop5");
    const woodBot5 = document.getElementById("woodBot5");
    const clawWoodLeft = document.getElementById("clawWoodWrapperLeft1");
    const clawWoodRight = document.getElementById("clawWoodWrapperRight1");

    const screw1 = document.getElementById("screwWrapper1");
    const screw2 = document.getElementById("screwWrapper2");
    const screw3 = document.getElementById("screwWrapper3");
    const screw4 = document.getElementById("screwWrapper4");
    const screw5 = document.getElementById("screwWrapper5");
    const screw6 = document.getElementById("screwWrapper6");
    const screw7 = document.getElementById("screwWrapper7");
    const screw8 = document.getElementById("screwWrapper8");
    const screw9 = document.getElementById("screwWrapper9");
    const screw10 = document.getElementById("screwWrapper10");

    const clawLeft = document.getElementById("clawLeftWrapper1");
    const clawCenter = document.getElementById("clawCenterWrapper1");
    const clawRight = document.getElementById("clawRightWrapper1");
    const clawAttachment = document.getElementById("clawAttachmentWrapper1");
    const screw11 = document.getElementById("screwWrapper11");
    const screw12 = document.getElementById("screwWrapper12");
    const screw13 = document.getElementById("screwWrapper13");

    this.setState({
      navbar: navbar,
      placeholder: placeholder,
      vh: vh,
      vw: vw,
      elements: {
        first: first,
        second: second,
        third: third,
        fourth: fourth
      },
      gears: {
        gearOne: {
          gearOneTop: gearOneTop,
          gearOneBot: gearOneBot,
          gearOneNut: gearOneNut
        },
        gearTwo: {
          gearTwoTop: gearTwoTop,
          gearTwoBot: gearTwoBot,
          gearTwoNut: gearTwoNut
        },
        gearThree: {
          gearThreeBot: gearThreeBot,
          gearThreeNut: gearThreeNut
        },
        gearFour: {
          gearFourBot: gearFourBot,
          gearFourNut: gearFourNut
        }
      },
      wood: {
        woodTop1: woodTop1,
        woodBot1: woodBot1,
        woodTop2: woodTop2,
        woodBot2: woodBot2,
        woodTop3: woodTop3,
        woodBot3: woodBot3,
        woodTop4: woodTop4,
        woodBot4: woodBot4,
        woodTop5: woodTop5,
        woodBot5: woodBot5,
        clawWoodLeft: clawWoodLeft,
        clawWoodRight: clawWoodRight,
        screw1: screw1,
        screw2: screw2,
        screw3: screw3,
        screw4: screw4,
        screw5: screw5,
        screw6: screw6,
        screw7: screw7,
        screw8: screw8,
        screw9: screw9,
        screw10: screw10
      },
      claw: {
        clawPlaceholder: clawPlaceholder,
        clawLeft: clawLeft,
        clawCenter: clawCenter,
        clawRight: clawRight,
        clawAttachment: clawAttachment,
        screw11: screw11,
        screw12: screw12,
        screw13: screw13
      }
    });

    const windowHeight = window.innerHeight;
    const navHeight = navbar.getBoundingClientRect().height;
    const navOffset = windowHeight - navHeight;
    navbar.style.marginTop = String(navOffset) + "px";
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScrollAnimation);
    window.removeEventListener("resize", this.handleScreenResize);
  }

  render() {
    return (
      <div className="App">
        <Placeholder />
        <Background />
        <Header />
        <SiteNav />
        <Body />
      </div>
    );
  }
}

export default App;
