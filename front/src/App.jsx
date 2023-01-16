import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

// *pages
import "./styles/App.css";
// import logoPegi18 from "../src/media/images/Logo_Pegi18.jpg"
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
          <MediaCard index={123} size={350} hauter={140} img={"https://picsum.photos/200/150"} name={"Barak"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem animi eveniet magni ab at. Sit ipsam libero nisi saepe quos dolorem aut ipsum corporis, voluptatibus cupiditate at odit, error in."} pegi={"./src/media/images/Logo_Pegi16.jpg"}/>
          <MediaCard index={321} size={350} hauter={140} img={"https://picsum.photos/200/103"} name={"42"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem animi eveniet magni ab at. Sit ipsam libero nisi saepe quos dolorem aut ipsum corporis, voluptatibus cupiditate at odit, error in."} pegi={"./src/media/images/Logo_Pegi7.png"}/>
          <MediaCard index={345} size={350} hauter={140} img={"https://picsum.photos/200/120"} name={"kninink"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem animi eveniet magni ab at. Sit ipsam libero nisi saepe quos dolorem aut ipsum corporis, voluptatibus cupiditate at odit, error in."} pegi={"./src/media/images/Logo_Pegi18.jpg"}/>
          <MediaCard index={543} size={350} hauter={140} img={"https://picsum.photos/200/123"} name={"Loren"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem animi eveniet magni ab at. Sit ipsam libero nisi saepe quos dolorem aut ipsum corporis, voluptatibus cupiditate at odit, error in."} pegi={"./src/media/images/Logo_Pegi16.jpg"}/>
          <MediaCard index={567} size={350} hauter={140} img={"https://picsum.photos/200/120"} name={"Matrice"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem animi eveniet magni ab at. Sit ipsam libero nisi saepe quos dolorem aut ipsum corporis, voluptatibus cupiditate at odit, error in."} pegi={"./src/media/images/Logo_Pegi18.jpg"}/>
          <MediaCard index={765} size={350} hauter={140} img={"https://picsum.photos/200/100"} name={"IMIE"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem animi eveniet magni ab at. Sit ipsam libero nisi saepe quos dolorem aut ipsum corporis, voluptatibus cupiditate at odit, error in."} pegi={"./src/media/images/Logo_Pegi7.png"}/>
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

export function MediaCard({index, size, hauter, img, name, description, pegi}) {

  return (
    <Card 
    // sx={{ display: 'inline-block', maxWidth: 345 }}
    sx={{ marginTop: 5, marginLeft: "3%",
      display: "inline-block",
      maxWidth: size,
      flexDirection: "column",
      // alignItems: "center",
    }}
    key={index}
    >
      <CardMedia
        sx={{ height: hauter }}
        image={img}
        title="green iguana"
      />
      <CardContent sx={{ textAlign: "left" }} >
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
          {/* Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica */}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small"><Link to="/Booking">Detail</Link></Button> */}
        <Button size="small"><Link to={`/Booking/${index}`}>Reservation</Link></Button>
        <img src={pegi} style={{ marginLeft:"190px", width:"45px", height:"auto"}} alt="Logo Pegi 18" />
      </CardActions>
    </Card>
  );
}

export default App;
