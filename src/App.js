import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import { Route, Link } from 'react-router-dom'
import WelcomePage from "./components/WelcomePage.js";
import Character from './components/CharacterPage'
import styled from 'styled-components'

const Links = styled.div`
  width: 25%
  margin: 0 auto
  display: flex
  justify-content: space-around
`

export default function App() {
  return (
    <main>
      <Header />
      <Links>
        <Link style={{textDecoration:'none'}} to='/'>HOME</Link>
        <Link style={{textDecoration:'none'}} to='/list'>CHARACTER LIST</Link>
      </Links>
      <div>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/list' component={CharacterList} />
        <Route path='/character/:id' 
        // component={Character}
        render={props => <Character {...props} />}
      />
      </div>
    </main>
  );
}
