/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Router from "./Router";
import Headers from "./Header/Header";

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
