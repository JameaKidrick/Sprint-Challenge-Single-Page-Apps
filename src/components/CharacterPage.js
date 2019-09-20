import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Character = (props) => {
    const [char, setChar] = useState([])

    useEffect(() => {
    const id = props.match.params.id;
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        console.log(response.data)
        setChar(response.data);
    })
    .catch(error => {
        console.log('Error', error)
    })
    }, [props.match.params.id]);

    const { name, species, origin, loc, epi } = char;
    return(
        <>
        <h2>{name}</h2>
        <p>{species}</p>
        {/* <p>{origin.name}</p> */}
        {/* // <p></p> */}
        {/* {for(let i=0; i<episode.length; i++){
            return episode[i].name
        }} */}
        </>
    )
}

export default Character;