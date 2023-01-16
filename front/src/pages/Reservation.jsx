import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// *pages
import "../styles/App.css";
import AppHeader from "../components/AppHeader";
import AppMain from "../components/AppMain";
import AppFooter from "../components/AppFooter";

//* Component
// import { MediaCard } from "../App";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

function Reservation() {

  const {RoomId} = useParams()
  const [rooms, setRooms] = useState([])
  const [dates, setDates] = useState([])
  const Days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

      useEffect(()=>{
        axios.get("/Rooms")
            .then((réponse)=> {
                console.log(réponse.data.resultat)
                if(réponse.status === 200){
                    setRooms(réponse.data.resultat)
                }
            })
            .catch((erreur)=> console.log(erreur))

        axios.get("/Dates")
          .then((réponse)=> {
              console.log(réponse.data.resultat)
              if(réponse.status === 200){
                  setDates(réponse.data.resultat)
              }
          })
          .catch((erreur)=> console.log(erreur))

      }, [])

  return (
    <section>
            <AppHeader/>
            <ul style={{ marginTop: 20, textAlign: "center"}}>
                {rooms.map(i => {
                    // console.log(i._id)
                    if(i._id === RoomId){
                      // return <MediaCard index={i._id} size={1100} hauter={350} img={i.img} name={i.name} description={i.description} pegi={`../src/media/images/Logo_Pegi${i.age}.${i.age === 7 ? "png" : "jpg"}`}/>
                      return (
                        <Card 
                        // sx={{ display: 'inline-block', maxWidth: 345 }}
                        sx={{ marginTop: 5, marginLeft: "3%",
                          display: "inline-block",
                          maxWidth: 1100,
                          flexDirection: "column",
                          // alignItems: "center",
                        }}
                        key={i._id}
                        >
                          <CardMedia
                            sx={{ height: 350 }} image={i.img} title="green iguana"
                          >

                          <img src={`../src/media/images/Logo_Pegi${i.age}.${i.age === 7 ? "png" : "jpg"}`} style={{ marginTop: "228px", marginLeft:"1000px", width:"100px", height:"auto"}} alt="Logo Pegi 18" />
                          </CardMedia>
                          <CardContent sx={{ textAlign: "left" }} >
                            <Typography gutterBottom variant="h5" component="div">
                            {i.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {i.description}
                              {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                              species, ranging across all continents except Antarctica */}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" style={{marginTop:'18px', marginBottom:'10px'}}>
                              Disponibilité
                            </Typography>
                          </CardContent>
                          <CardActions>
                            {
                              Days.map(i => {
                                return (
                                  <ul style={{ marginLeft: 60, textAlign: "center"}}>
                                    <li><b>{i}</b></li>
                                    <li>
                                      <Button size="small" style={{margin:'5px', backgroundColor: "green"}} variant="contained">
                                        {/* {isThisMorning(item.date) ? 'MATIN' : 'APRES-MIDI' } */}
                                        MATIN
                                      </Button>
                                    </li>
                                    <li>
                                      <Button size="small" style={{margin:'5px', backgroundColor: "green"}} variant="contained">
                                        {/* {isThisMorning(item.date) ? 'MATIN' : 'APRES-MIDI' } */}
                                        APREM
                                      </Button>
                                    </li>
                                  </ul>
                                )
                              })
                            }
                         
                            </CardActions>
                        </Card>
                      );
                    }
                })}
            </ul>
            {/* <MediaCard index={777} size={900}/> */}
            <AppMain/>
            <AppFooter/>
        </section>
  );
}

export default Reservation;
