import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

// *pages
import "./styles/App.css";
import logoPegi18 from "../src/media/images/Logo_Pegi18.jpg"
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import AppFooter from "./components/AppFooter";

class App extends Component {
  render() {
    return (
      <>
        <AppHeader />
        <ul style={{ marginTop: 20, textAlign: "center"}}>
          <h1>Bienvenue sur le site de résa Escape Room</h1>
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </ul>
        <AppMain />
        <AppFooter />
      </>
    );
  }
}

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function MediaCard() {
  return (
    <Card 
    // sx={{ display: 'inline-block', maxWidth: 345 }}
    sx={{ marginTop: 5, marginLeft: "3%",
      display: "inline-block",
      maxWidth: 350,
      flexDirection: "column",
      // alignItems: "center",
    }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/200/100"
        // image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent sx={{ textAlign: "left" }}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small"><Link to="/Booking">Detail</Link></Button> */}
        <Button size="small"><Link to="/Reservation">Reservation</Link></Button>
        <img src={logoPegi18} style={{ marginLeft:"190px", width:"45px", height:"auto"}} alt="Logo Pegi 18" />
      </CardActions>
    </Card>
  );
}

export default App;
