import React, {useState} from 'react';

import "../styles/AppHeader.css"
import logoEscapeGame from "../media/images/logo-esc.png"



const AppHeader = () => {
    const [userConnect, setUserConnect] = useState(false);
    return (
        <header>
           <section>
            <div className='applogo'>
                <img src={logoEscapeGame} alt="" style={{width:"100px",}}/>
            </div>
                
            </section>
            <section>
                <div className=''>
                    {userConnect && <p>Bonjour</p>}
                </div>
            </section>
            <section>
                <div >
                    <a  style={{color:'red',marginRight : '10px'}}>Historique</a>

                    <a style={{color:'white'}}>Connexion </a>
                </div>
            </section>
        </header>
    );
}

export default AppHeader;
