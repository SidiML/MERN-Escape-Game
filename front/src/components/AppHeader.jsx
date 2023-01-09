import React from 'react';
import "../styles/AppHeader.css"
import logoEscapeGame from "../media/images/logo-esc.png"

const AppHeader = () => {
    return (
        <header>
           <section>
            <div className='applogo'>
                <img src={logoEscapeGame} alt="" style={{width:"100px",}}/>
            </div>
                
            </section>
            <section>
                <div>
                    <p>Bonjour</p>
                </div>
            </section>
            <section>
                <div>
                    <a>Historique</a>

                    <a>Connexion</a>
                </div>
            </section>
        </header>
    );
}

export default AppHeader;
