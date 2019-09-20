import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import { Route } from 'react-router-dom'
import WelcomePage from "./components/WelcomePage.js";
import Character from './components/CharacterPage'


export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Route exact path='/' component={CharacterList} />

      {/* <CharacterList /> */}

      <Route path='/character/:id' 
      // component={Character}
      render={props => <Character {...props} />}
      />
    </main>
  );
}
