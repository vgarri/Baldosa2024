import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portada from "./components/Portada"
import UltimoLanz from "./components/UltimoLanz"
import Conciertos from "./components/Conciertos"
import Bio from "./components/Bio"
import Contacto from "./components/Contacto"
import Main from './components/Main/Main'


function App() {







  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>



    </>
  )
}

export default App
