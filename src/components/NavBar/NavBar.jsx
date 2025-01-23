import React, {useState, useEffect} from "react";
import { Events } from 'react-scroll';

const NavBar = () => {

  //Para cambiar las clases del menú hamburguesa onClick
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [bubble_class, setBubbleClass] = useState("bubble-hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //toggle del menu
  const updateMenu = () => {
    if (!isMenuClicked){
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
      setBubbleClass("bubble-visible")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
      setBubbleClass("bubble-hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return <>
          
          <section style={{width: "100%", height: 'auto'}}>
            <nav>
              <article className="burger-menu" onClick={updateMenu}>
                <article className={burger_class} ></article>
                <article className={burger_class} ></article>
                <article className={burger_class} ></article>
              </article>
            </nav>
          </section>
          <section className={menu_class}>
            {isMenuClicked ? <>
            <article className="bubble1">Nuestras redes</article>
            <article className="bubble">Merch</article>
            <article className="bubble">Instagram</article>
            <article className="bubble">Bandcamp</article>
            <article className="bubble">Spotify</article>
            </> : <></>}

            

          </section>
  
  
  
        </>;
};

export default NavBar;
