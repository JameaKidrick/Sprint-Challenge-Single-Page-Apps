import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import { Route } from 'react-router-dom'
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <SearchForm />

      <CharacterList />

      {/* <Route exact path='/' component={WelcomePage} /> */}
      {/* <Route path='/character' */}
    </main>
  );
}
