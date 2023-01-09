import React from "react";

// *pages
import "../styles/App.css";
import AppHeader from "../components/AppHeader";
import AppMain from "../components/AppMain";
import AppFooter from "../components/AppFooter";

function Booking () {
  return (
    <section>
      <AppHeader />
      <h1>Booking</h1>
      <AppMain />
      <AppFooter />
    </section>
  );
};

export default Booking;
