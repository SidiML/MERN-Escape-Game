import React from 'react';

import "../styles/AppFooter.css"
import logoEscapeGame from "../media/images/Logo_EscapeGame.png"

const AppFooter = () => {
    return (
        <footer>
           <section>
                <div className='AppLogo'>
                    <a href="/"><img src={logoEscapeGame} style={{width:"100px"}} alt="logo EscapeGame"/></a>
                </div>
                <div>
                    <a href="">Home</a>|
                    <a href="">Blog</a>|
                    <a href="">Pricing</a>|
                    <a href="">About</a>|
                    <a href="">Faq</a>|
                    <a href="">Contact</a>
                </div>
            </section>

            <section>
                <div>
                    <p>55, rue du Faubourg Saint-Honoré</p>
                    <p>75008, Paris</p>
                    <p>+33 1 42 92 81 00</p>
                    <p>contact@escape-game.com</p>
                </div>
                <div>
                    <p>Copyright ® SYL & SYL 2022. </p>
                </div>
            </section>
            <section>
                <div>
                    <a>A propos</a>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro incidunt maiores molestiae tenetur distinctio voluptatem, optio vero. Dicta soluta praesentium optio reiciendis modi veritatis nostrum ad quod magnam explicabo!
                    </p>
                </div>
                <div>

                </div>
            </section>
        </footer>
    );
}

export default AppFooter;
