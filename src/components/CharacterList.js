import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([])
  // const [id, setId] = useState(1)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data.results)
      const char = response.data.results;
      setChar([char]);
    })
    .catch(error => {
      console.log('Error', error)
    })
  }, []);

  return (
    <section className="character-list">
      <h2>Fun Facts</h2>
      {char.map((item, index) => {
        return(
          <CharacterCard
            key={index}
            name={item.name}
            species={item.species}
            // origin={item.origin.name}
            // location={item.location.name}
            // episode={item.episode.length}
          />
        )
      })}
    </section>
  );
}

{/* <CharacterCard */}
{/* // species={item.species}
              // origin={item.origin.name}
              // location={item.location.name}
              // episode={item.episode.length}
            // /> */}
            {/* <button onClick={() => setId(Math.floor(Math.random()*493))}>Random Character</button> */}