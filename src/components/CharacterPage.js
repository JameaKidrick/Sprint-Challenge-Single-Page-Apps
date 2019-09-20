import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'

const Character = (props) => {
    const [char, setChar] = useState([])

    useEffect(() => {
    const id = props.match.id;
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        console.log(response.data)
        setChar(response.data);
    })
    .catch(error => {
        console.log('Error', error)
    })
    }, [props.match.id]);

    return(
        <div>
            {/* MAP THROUGH */}
            <CharacterCard 
            name={props.name}
            {props.species}
            />
        </div>
    )
}

export default Character;