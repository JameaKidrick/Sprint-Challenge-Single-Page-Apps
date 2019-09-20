import React from "react";

export default function CharacterCard(props) {
  return(
    <div className='cardContainer' key={props.id}>
      <h2>Name: {props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Origin: {props.origin}</p>
      <p>Current Location: {props.location}</p>
      <p>Appeared in {props.episode} episode(s)</p>
    </div>
  )
}
