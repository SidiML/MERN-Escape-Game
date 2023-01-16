import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'


// *pages
import "../styles/App.css";
import AppHeader from "../components/AppHeader";
import AppMain from "../components/AppMain";
import AppFooter from "../components/AppFooter";


//* Component
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';





function Booking1() {

  const [room, setRoom] = useState({})
  const [slots,setSlots] = useState([]);
  const params = useParams()
  let lastDate = ''

  useEffect(()=>{
      const roomId = params.id
      //console.log(params.id)

      axios.get(`http://localhost:5000/Room/${roomId}`)
      .then((res)=>{
        console.log(res);
          setRoom(res.data.rooms) 
      })

      fetchSlots(roomId)
  },[])

// console.log(room)

const fetchSlots = (roomId) => {
  axios(`http://localhost:5000/Date/${roomId}`)
    .then((result)=>{
      // console.log(result)
     
      result.data.dates.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
      });
      
      setSlots(result.data.dates)
    })
}

const getDay = (dateString) => {
  let date = new Date(dateString)
  let options = {weekday: "long", month: "long", day: "numeric"};
  return date.toLocaleDateString("fr-FR", options)
}

const isThisMorning = (dateString) => {
  if(dateString.includes('T09')){
      return true
  } else {
      return false
  }
}

// //console.log(dates)

// const toggleSlot = () => {
  
// }

return (
  <div>
      <Card sx={{ maxWidth: 300, maxHeight:5000, textAlign:'center' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={room.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {room.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">{room.description}
          </Typography>
          <Typography variant="h6" color="text.secondary" style={{marginTop:'18px', marginBottom:'10px'}}>Disponibilité
          </Typography>
          <div>
            {slots.map((item) => {
              const day = item.date.split('T')[0]
              let dontExist = true 

              if(day === lastDate ){
                dontExist = false 
              } 

              lastDate = day

              return (
                <>  
                  <div>
                    {dontExist && <Typography variant="body2" color="text.secondary" style={{marginTop:'10px', marginBottom:'10px', textAlign:'center'}}>{getDay(item.date)}
                    </Typography>}
                    <div>
                      <Button size="small" style={{margin:'5px'}} variant="outlined">
                        {isThisMorning(item.date) ? 'MATIN' : 'APRES-MIDI' }
                      </Button>
                    </div>
                  </div>
                </>
            )})}
        </div>

        </CardContent>
      </CardActionArea>
    </Card>
  </div>
)
}



function Booking () {

  const {RoomId, jour} = useParams()
  console.log(useParams());
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
      <AppHeader />

      {/* <Booking1/> */}
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
     

      <AppMain />
      <AppFooter />
    </section>
  );
};

export default Booking;
