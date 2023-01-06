import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:5173"

//* Pages
import App from "./App.jsx";
import Connexion from "./pages/Connexion.jsx"
import Inscription from './pages/Inscription.jsx'
import Home from './pages/Home.jsx'
import Reservation from './pages/Reservation.jsx'
import Booking from './pages/Booking.jsx'
import Historique from './pages/Historique.jsx'


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Connexion" element={<Connexion />}></Route>
      <Route path="/Inscription" element={<Inscription />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Reservation" element={<Reservation />}></Route>
      <Route path="/Booking" element={<Booking />}></Route>
      <Route path="/Historique" element={<Historique />}></Route>
    </Routes>
  </BrowserRouter>
  //</React.StrictMode>
);
