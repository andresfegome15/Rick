import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ url }) => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, [url]);
  return (
    <li key={character?.id}>
      <h6>
        {character?.status === "Dead" && (
          <span style={{ background: "#B94343" }}></span>
        )}
        {character?.status === "Alive" && (
          <span style={{ background: "#4AB648" }}></span>
        )}
        {character?.status === "unknown" && (
          <span style={{ background: "yellow" }}></span>
        )}
        {character?.status}
      </h6>
      <img src={character?.image} alt="" />
      <h1>{character?.name}</h1>
      <h5>Raza:</h5>
      <h3>{character?.species}</h3>
      <h5>Origen:</h5>
      <h3>{character.origin?.name}</h3>
      <h5>Apariciones:</h5>
      <h3>{character?.episode?.length}</h3>
    </li>
  );
};

export default ResidentInfo;
