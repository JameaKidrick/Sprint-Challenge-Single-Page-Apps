import React, { useState, useEffect } from "react";
import CharacterList from './CharacterList'

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([])

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  // useEffect(() => {
  //   const results = char.filter(fav =>
  //     fav.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setSearchResults(results);
  // }, [])

  return (
    <section className="search-form">
     // Add a search form here
      <div className='searchbar'>
        <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
        />
      </div>
    </section>
  );
}
