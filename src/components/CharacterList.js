import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'
// import { Card, Col } from 'reactstrap'
import styled from 'styled-components'

const Card = styled.div`
  width: 250px
  margin: 10px
  color: white
`
const Contain = styled.div`
  display: flex
  text-align: center
  flex-direction: column
  flex-wrap: wrap
  justify-content: center
  align-items: center
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([])

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
    <Contain className="character-list">
      <h2>Character List</h2>
      {/* <SearchForm /> */}

      {char.map((item, index) => {
        return(
          <Link to={`/character/${item.id}`}>
            <Card>
              <CharacterCard
              key={index}
              name={item.name}
              />
            </Card>
          </Link>
        )
      })}
    </Contain>
  );
}
