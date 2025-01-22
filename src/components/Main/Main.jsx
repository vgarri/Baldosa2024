import React from "react";
import { Routes, Route } from "react-router-dom"
import Portada from "../Portada"
import UltimoLanz from "../UltimoLanz"
import Conciertos from "../Conciertos"
import Bio from "../Bio"
import Contacto from "../Contacto"
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Main = () => {
  return <>
    <NavBar/>
    <Portada/>
    <Conciertos/>
    <UltimoLanz/>
    <Bio/>
    {/* <Contacto/> */}
    <Footer/>
  </>;
};

export default Main;
