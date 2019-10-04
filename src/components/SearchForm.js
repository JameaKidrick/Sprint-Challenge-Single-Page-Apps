import React, { useState, useEffect } from "react";
import CharacterList from './CharacterList'
import axios from 'axios'

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([])

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

console.log(char)

  // {
  //   var arr = []
  //   for(let i=0; i<char.length; i++){
      
  //     var hello = arr.push(char[i].name) 
  //     console.log(hello)
  //   }
  // }

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = char.filter(fav =>
      fav.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      console.log(props.arr)
  }, [searchTerm])

  return (
    <section className="search-form">
      <div className='searchbar'>
        <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
        />
        <ul>
          {searchResults.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
