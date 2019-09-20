import React from "react";

export default function CharacterCard(props) {
  return(
    <div className='cardContainer' key={props.id}>
      <h2>{props.name}</h2>
      <p>{props.species}</p>
      <p>{props.origin}</p>
      <p>{props.location}</p>
      <p>{props.episode}</p>
    </div>
  )
}
