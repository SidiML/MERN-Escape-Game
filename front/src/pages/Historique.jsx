import React from 'react';

// *pages
import "../styles/App.css";
import AppHeader from "../components/AppHeader";
import AppMain from "../components/AppMain";
import AppFooter from "../components/AppFooter";

function Historique ()  {
    return (
        <section>
            <AppHeader />
            <h1>Historique</h1>
            <AppMain />
            <AppFooter />
        </section>
    );
}

export default Historique;
