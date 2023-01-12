import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


export default function Booking() {

    const [room, setRoom] = useState({})
    const [slots,setSlots] = useState([]);
    const params = useParams()
    let lastDate = ''

    useEffect(()=>{
        const roomId = params.id
        // console.log(params.id)

        axios.get(`http://localhost:4000/rooms/${roomId}`)
        .then((res)=>{
            setRoom(res.data.rooms) 
        })

        fetchSlots(roomId)
    },[])

  // console.log(room)

  const fetchSlots = (roomId) => {
    axios(`http://localhost:4000/slots/${roomId}`)
      .then((result)=>{
        // console.log(result)
       
        result.data.slot.sort(function(a,b){
          return new Date(a.date) - new Date(b.date);
        });
        
        setSlots(result.data.slot)
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

  console.log(slots)

  const toggleSlot = () => {
    
  }

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


// <Button size="small" style={{margin:'10px'}} variant="outlined">
// {item.date}
// </Button>