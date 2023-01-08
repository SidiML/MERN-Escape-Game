import React, { Component } from "react";
import { useState } from "react";

// *pages
import "./App.css";
import AppHeader from "./components/AppHeader";

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
