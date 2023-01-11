import React from "react";

// *pages
import "../styles/App.css";
import AppHeader from "../components/AppHeader";
import AppMain from "../components/AppMain";
import AppFooter from "../components/AppFooter";

function ResetPassword () {
  return (
    <section>
      <AppHeader />
      <h1>RestPassword</h1>
      <AppMain />
      <AppFooter />
    </section>
  );
};

export default ResetPassword;