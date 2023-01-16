import React, {useState} from 'react';
import "../styles/AppHeader.css"
import logoEscapeGame from "../media/images/Logo_EscapeGame.png"


const AppHeader = () => {
    const [userConnect, setUserConnect] = useState(false)

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
                    {userConnect && <h2>Bonjour {UserName}</h2>}
                    {/* {UserName !== "" && <h2>Bonjour {UserName}</h2>} */}
                </div>
            </section>
            <section>
                <div>
                    {userConnect && <a href='/Historique' style={{marginRight: '10px', color: 'red'}}>Historique</a>}
                    {userConnect == false ? <a href='/Connexion' style={{color:'white'}}>Connexion</a> : <a href='/Connexion' style={{color:'white'}}>Deconnexion</a>}

                    {/* {UserName !== "" && <a href='/Historique' style={{marginRight: '10px', color: 'red'}}>Historique</a>}
                    {UserName ? <a href='/Connexion' style={{color:'white'}}>Connexion</a> : <a href='/Connexion' style={{color:'white'}}>Deconnexion</a>} */}
                </div>
            </section>
        </header>
    );
}

export default AppHeader;
