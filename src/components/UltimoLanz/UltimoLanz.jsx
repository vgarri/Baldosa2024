import React from "react";
import { Spotify } from "react-spotify-embed";

const UltimoLanz = () => {
  return  <section className="ultimolanzamiento">
  {/* <h1>Último lanzamiento</h1> */}
  <article className="spotify">
<Spotify link="https://open.spotify.com/intl-es/album/6JCEufaKK67UO7p94A9iee?si=BmqGu_yJQ3Wkyzt1nmQ61g"></Spotify>
  </article>
</section>;
};

export default UltimoLanz;


