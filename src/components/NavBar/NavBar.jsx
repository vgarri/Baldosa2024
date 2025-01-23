import React, {useState, useEffect} from "react";
import { Events } from 'react-scroll';

const NavBar = () => {

  //Para cambiar las clases del menú hamburguesa onClick
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //toggle del menu
  const updateMenu = () => {
    if (!isMenuClicked){
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
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

          </section>
  
  
  
        </>;
};

export default NavBar;
