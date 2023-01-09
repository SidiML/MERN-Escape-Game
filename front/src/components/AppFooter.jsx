import React from 'react';

import "../styles/AppFooter.css"
import logoEscapeGame from "../media/images/logo-esc.png"

const AppFooter = () => {
    return (
        <footer>
           <section>
                <div>
                <img src={logoEscapeGame} style={{width:"100px"}} alt="logo EscapeGame"/>
                </div>
                <div>
                    <a href="">Home</a>|
                    <a href="">Blog</a>|
                    <a href="">Pricing</a>|
                    <a href="">About</a>|
                    <a href="">Faq</a>|
                    <a href="">Contact</a>
                </div>
                <div>
                    <p>55, rue ...</p>
                    <p>55, rue ...</p>
                    <p>55, rue ...</p>
                    <p>55, rue ...</p>
                </div>
                <div>
                    <a>A propos</a>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro incidunt maiores molestiae tenetur distinctio voluptatem, optio vero. Dicta soluta praesentium optio reiciendis modi veritatis nostrum ad quod magnam explicabo!
                    </p>
                </div>
            </section>
        </footer>
    );
}

export default AppFooter;
