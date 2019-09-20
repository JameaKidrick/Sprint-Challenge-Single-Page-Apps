import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Character = (props) => {
    const [char, setChar] = useState([])
    const [id, setId] = useState(1)

    useEffect(() => {

    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        console.log(response.data)
        const char = response.data;
        setChar([char]);
    })
    .catch(error => {
        console.log('Error', error)
    })
    }, [id]);
}