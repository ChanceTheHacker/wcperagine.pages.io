import React, { Component } from "react";
import Background from "./components/background";
import Header from "./components/Header";
import SiteNav from "./components/SiteNav";
import Body from "./components/Body";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <Header />
        <SiteNav />
        <Body />
      </div>
    );
  }
}

export default App;
