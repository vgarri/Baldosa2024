import React from "react";
import Slider from "@ant-design/react-slick";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Bio = () => {
  




  return <section className="bio">
  
    <h1>Bio</h1>
    <article className="carrusel">
   <img src="https://cdn.diariodeavisos.com/wp-content/uploads/2023/10/Baldosa-grupo-1024x865.jpg"></img>
    </article>
    <article className="textBio">
    <p className="pbio">Baldosa es una banda que surge en 2021 en Tenerife. Su música, una amalgama de 
    shoegaze, pop, new wave, post-punk y sobre todo rock, presenta un sonido 
    traído a la actualidad con estribillos pegadizos que 
    cautiva a un público muy diverso.
    Paula, Miguel y Garri, sus tres componentes, 
    ya tienen como Baldosa dos EPs en el mercado (“Baldosa” en 2022 y “Queriendo Igual” en 2024). 
    La banda se destaca por su habilidad para fusionar influencias internacionales 
    (Wolf Alice, Beabadoobee, The Breeders, Wet Leg, My Bloody Valentine, Sonic Youth, Ride, Olivia Rodrigo)
    con una identidad local única.
    Además de los clásicos temas de amor y desamor, Baldosa se atreve también explorar temas 
    controvertidos como el turismo masivo y la salud mental, entre muchos otros.</p>
      </article>



  </section>;
};

export default Bio;
