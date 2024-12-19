import React from "react";
import { Routes, Route } from "react-router-dom"
import Portada from "../Portada"
import UltimoLanz from "../UltimoLanz"
import Conciertos from "../Conciertos"
import Bio from "../Bio"
import Contacto from "../Contacto"

const Main = () => {
  return <>
    <Portada/>
    <Conciertos/>
    <UltimoLanz/>
    <Bio/>
    <Contacto/>
  </>;
};

export default Main;
