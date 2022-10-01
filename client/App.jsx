import React, { Element } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import Equipment from './components/Equipment';
import Create from './components/Create';
// import CreateCharacter from './components/CreateCharacter';

import './stylesheets/styles.css';

const App = props => {
  return (
    <div className='router'>
      <main>
        <Routes>
          <Route 
            path="/"
            element = {<Main/>}
          />
          <Route 
            exact
            path="/equipment"
            element = {<Equipment/>}
          />
          <Route 
            exact
            path="/create"
            element = {<Create/>}
          />
        </Routes>
      </main>
    </div>
  );
};
export default App;