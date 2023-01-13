import React, {useEffect,useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';




export default function Home() {

    const [rooms, setRooms] = useState([])

    const fetchRooms = async () => {
        const result = await axios("http://localhost:4000/rooms")
        // console.log(result.data.rooms)
        setRooms(result.data.rooms)
        
    }

    useEffect(()=>{
        fetchRooms()
    },[])

      
    function Router(props) {
        const { children } = props;
        if (typeof window === 'undefined') {
          return <StaticRouter location="/">{children}</StaticRouter>;
        }
      
        return <MemoryRouter>{children}</MemoryRouter>;
      }
      
      Router.propTypes = {
        children: PropTypes.node,
      };
      

  return (
    <div>{rooms.map((item, index)=>
        <Card sx={{ maxWidth: 300, maxHeight:400 }} key={index}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">{item.description}
            </Typography>
            
            <Button component={RouterLink} to={`/booking/${item._id}`} variant="outlined">
                Réserver
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    )}
    </div>
  )
}
