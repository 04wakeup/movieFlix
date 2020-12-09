import React, { Component } from "react";
import Router from "./Router";
import Headers from "./Header";

class App extends Component {
  render() {
    return (
      <>
        <Headers />
        <Router />
      </>
    );
  }
}

export default App;
