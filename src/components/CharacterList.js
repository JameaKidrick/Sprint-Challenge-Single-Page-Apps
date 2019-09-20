import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'

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
      const getChar = response.data.results;
      setChar(getChar);
      // console.log(getChar)
    })
    .catch(error => {
      console.log('Error', error)
    })
  }, []);

  return (
    <section className="character-list">
      <h2>Fun Facts</h2>
      {/* <SearchForm name={char}/> */}
      {char.map((item, index) => {
        return(
          <Link to={`/character/${item.id}`}>
            <CharacterCard
              key={index}
              name={item.name}
              species={item.species}
              // origin={item.origin.name}
              // location={item.location.name}
              // episode={item.episode.length}
            />
          </Link>
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