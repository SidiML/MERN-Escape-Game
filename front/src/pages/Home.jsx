import React, {useState, useEffect} from 'react';
import axios from 'axios';

//* pages
import "../styles/App.css";
import AppHeader from "../components/AppHeader";
import AppMain from "../components/AppMain";
import AppFooter from "../components/AppFooter";

//* Component
import { MediaCard } from '../App';

function Home () {

      const [rooms, setRooms] = useState([])
    //   const result =
      useEffect(()=>{
        axios.get("/Rooms")
            .then((réponse)=> {
                console.log(réponse.data.resultat)
                if(réponse.status === 200){
                    setRooms(réponse.data.resultat)
                }
            })
            .catch((erreur)=> console.log(erreur))
        // console.log(rooms)
        // setRooms(result.data.rooms)
      }, [])

    return (
        <section>
            <AppHeader/>
            <ul style={{ marginTop: 20, textAlign: "center"}}>
                {rooms.map(i => {
                    // console.log(i._id)
                    return <MediaCard index={i._id} size={350} hauter={140} img={i.img} name={i.name} description={i.description} pegi={`./src/media/images/Logo_Pegi${i.age}.${i.age === 7 ? "png" : "jpg"}`}/>
                })}
            </ul>
            <AppMain/>
            <AppFooter/>
        </section>
    );
}

export default Home;
