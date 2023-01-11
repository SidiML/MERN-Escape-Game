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
                    {userConnect && <p>Bonjour</p>}
                </div>
            </section>
            <section>
                <div>
                    <a href='/Historique' style={{marginRight: '10px', color: 'red'}}>Historique</a>

                    <a href='/Connexion' style={{color:'white'}}>Connexion</a>
                </div>
            </section>
        </header>
    );
}

export default AppHeader;
