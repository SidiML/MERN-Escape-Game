import React, { Component } from "react";
import { useState } from "react";

// *pages
import "./styles/App.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import AppFooter from "./components/AppFooter";

class App extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <h1>App</h1>
        <AppMain />
        <AppFooter />
      </>
    );
  }
}

export default App;
