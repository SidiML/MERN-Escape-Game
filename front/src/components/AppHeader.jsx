import React, {useState, useEffect} from 'react';
import "../styles/AppHeader.css"
import logoEscapeGame from "../media/images/Logo_EscapeGame.png"


const AppHeader = () => {
    const [user, setUser] = useState(false)
    console.log("init", user)
    
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem("user")))
        
    }, [])
    
    const Logout = ()=>{
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(false)
    }
    
    return (
        <header>
            <section>
                <div className='AppLogo'>
                   <a href='/'>
                    <img src={logoEscapeGame} style={{width:"100px"}} alt="logo EscapeGame"/>
                    </a> 
                </div>
                
            </section>
            <section>
                <div className=''>
                    { user && <h2>Bonjour {user.nom}</h2>}
                </div>
            </section>
            <section>
                <div>
                    {user && <a href='/Historique' style={{marginRight: '10px', color: 'red'}}>Historique</a>}
                    {user === true || user !== null ? <a href='/Connexion' style={{color:'white'}} onClick={Logout}>Deconnexion</a> : <a href='/Connexion' style={{color:'white'}}>Connexion</a>}
                </div>
            </section>
        </header>
    );
}

export default AppHeader;
