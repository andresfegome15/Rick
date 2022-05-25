import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";

const Location = () => {
  const [idlocation, setIdlocation] = useState("");
  const [info, setInfo] = useState({});
  useEffect(() => {
    const random = Math.floor(Math.random() * 18) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setInfo(res.data));
    console.log("random" + random);
  }, []);

  const changesearch = () => {
    console.log("location" + idlocation);
    axios
      .get(`https://rickandmortyapi.com/api/location/${idlocation}`)
      .then((res) => setInfo(res.data));
  };

  /* const buttons =()=>{
          let i=info?.id
          let botons =""
          for(i;i<19;i++){
               
                return 
          }
          
      } */
  return (
    <div>
      <div className="divinfo">
        <input
          type="text"
          onChange={(e) => setIdlocation(e.target.value)}
          value={idlocation}
          placeholder={info?.dimension}
        />
        <button onClick={changesearch}>Search</button>

        <li>Nombre:</li>
        <li>Tipo:</li>
        <li>Dimensión</li>
        <li>Población</li>
        <li>{info?.name}</li>
        <li>{info?.type}</li>
        <li>{info?.dimension}</li>
        <li>{info?.residents?.length}</li>
      </div>
      <section>
        <ul className="container_character">
          {info.residents?.map((resident) => (
            <ResidentInfo url={resident} />
          ))}
        </ul>
      </section>

      <footer className="footbuttons"></footer>
    </div>
  );
};

export default Location;
