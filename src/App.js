import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import { Route, Link } from 'react-router-dom'
import WelcomePage from "./components/WelcomePage.js";
import Character from './components/CharacterPage'


export default function App() {
  return (
    <main>
      <Header />
      <Link to='/'>HOME</Link>
      <Link to='/list'>CHARACTER LIST</Link>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/list' component={CharacterList} />
      <Route path='/character/:id' 
      // component={Character}
      render={props => <Character {...props} />}
      />
    </main>
  );
}
