import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Homepage from './homepage';
import Signup from './signup';

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={props => (
        <Homepage />
      )}/>
    <Route path="/signup" exact render={props => (
        <Signup />
      )}/>

      
    </div>
  );
}

export default App;