import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

//* pages
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
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function Reservation({enregistrement}) {

  const {RoomId, jour} = useParams()
  console.log(useParams());
  const [rooms, setRooms] = useState([])
  const [dates, setDates] = useState([])
  const Days = ["Lundi", "Mardi", "Mercredi", "Jeudi"]

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


    const [redirect, setRedirect] = useState(false)

    const [participant, setParticipant] = useState(0)
    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const [date, setDate] = useState("")
    const [formCompleted, setFormCompleted] = useState(false)

    const handleSubmit = async(event) => {
      event.preventDefault();
      //const Users = { email: email, password: password};
      //console.log(Users);
  
      await axios.put("/Date/Update", {_id: email, isFree: true})
        .then((réponse)=>{
            console.log(réponse)
            console.log(réponse.data)
            // if(réponse.status === 200){
              // localStorage.setItem("token", réponse.data.token)
              // localStorage.setItem("user", JSON.stringify(réponse.data.user))
              // setUser(réponse.data.user)
              // setLogged(true)
              // setRedirect(true)
            // }
        }).catch((erreur)=>{ console.log(erreur);})
    };
  
    if(redirect){
      return <Navigate to="/Historique" /> 
    }

  return (
    <section>
            <AppHeader/>

            { jour === "aprem" && enregistrement === "aprem" ? (
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
                                Vous allez réserver la salle "{i.name}" pour "Mercredi {jour}"
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {i.description}
                              </Typography>
                              <Typography variant="h6" color="text.secondary" style={{marginTop:'18px', marginBottom:'10px'}}>
                                <b>Disponibilité</b>
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Typography variant="h3" color="initial" style={{marginTop: "75px", fontSize: "10px"}}>
                                <Button size="small"><Link to={`/Home`}>Retour</Link></Button>
                              </Typography>
                              {
                                Days.map(i => {
                                  return (
                                    <ul style={{ marginLeft: 60, textAlign: "center"}}>
                                      <li><b>{i}</b></li>
                                      <li>
                                        <Button size="small" style={{margin:'5px', backgroundColor: "green"}} variant="contained">
                                          {/* {isThisMorning(item.date) ? 'MATIN' : 'APRES-MIDI' } */}
                                          <Link to={`/Reservation/${RoomId}/matin`} style={{color: "white"}}>MATIN</Link>
                                        </Button>
                                      </li>
                                      <li>
                                        <Button size="small" style={{margin:'5px', backgroundColor: "green"}} variant="contained">
                                          {/* {isThisMorning(item.date) ? 'MATIN' : 'APRES-MIDI' } */}
                                          <Link to={`/Reservation/${RoomId}/aprem`} style={{color: "white"}}>APRÈM</Link>
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
              ) : ""
            }

            {jour === "matin" && enregistrement === "matin" ? (
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
                            Vous allez réserver la salle "{i.name}" pour "Mercredi {jour}"
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              le nombre de participant doit être compris entre {i.minplayers} et {i.capacity}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" style={{marginTop:'18px', marginBottom:'10px'}}>
                              <input type="number" name="" id="" style={{width: 1000}} onChange={e => setParticipant(e.target.value)}/>
                            </Typography>
                          </CardContent>
                          <CardActions>
                          <ul style={{ marginLeft: 60, textAlign: "center"}}>
                                    <li><b>Liste des participants</b></li>
                            {
                              Days.map(i => {
                                return (
                                  
                                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                                      <TextField margin="normal" id="prenom" name="prenom" label="prenom" autoComplete="prenom" required autoFocus
                                        onChange={e => setPrenom(e.target.value)}
                                      />
                                      <TextField margin="normal" id="nom" name="nom" label="nom" autoComplete="nom" required autoFocus
                                        onChange={e => setNom(e.target.value)}
                                      />
                                      <TextField margin="normal" id="date" name="date" label="date" autoComplete="date" required autoFocus
                                        onChange={e => setDate(e.target.value)}
                                      />

                                      <Grid container>
                                        <Grid item>
                                          <Link href="/Inscription" variant="body2">Date de naissance du participant</Link>
                                        </Grid>
                                      </Grid>
                                    </Box>
                                )
                              })
                            }
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled> RÉSERVER </Button>
                            </ul>
                        
                            </CardActions>
                        </Card>
                      );
                    }
                })}
                </ul>
              ) : ""
            }

            <AppMain/>
            <AppFooter/>
        </section>
  );
}

export default Reservation;
