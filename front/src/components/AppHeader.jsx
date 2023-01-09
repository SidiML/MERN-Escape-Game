import React from 'react';
import "../styles/AppHeader.css"
<<<<<<< HEAD
=======
import logoEscapeGame from "../media/images/logo-esc.png"

>>>>>>> 324e2a0dbc7c03a2d3f1e9a3bdca4177009a9851
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
