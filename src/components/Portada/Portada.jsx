import React from "react";
import {Link, useNavigate} from "react-router-dom"
import { Link as LinkRoll } from 'react-scroll'
import Conciertos from "../Conciertos";

const Portada = () => {

const navigate = useNavigate();



  return <>
  <section className="portada">
    <h1>Portada</h1>
    <img src="https://i.ibb.co/ch6j59t/Captura-de-pantalla-2024-12-19-a-las-18-28-41.png"></img>
  <article className="mas">

  <h1>MÁS ⬇</h1>
                              
  </article>
  </section>
  </>;
};

export default Portada;
