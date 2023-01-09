import React, { Component } from "react";
import { useState } from "react";

// *pages
import "./styles/App.css";
import AppHeader from "./components/appHeader";

class App extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <h1>App</h1>
      </>
    );
  }
}

export default App;
