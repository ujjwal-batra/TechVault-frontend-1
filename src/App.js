import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Homepage from "./homepage";
import Signup from "./signup";
import Login from "./login";

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={(props) => <Homepage />} />
      <Route path="/signup" exact render={(props) => <Signup />} />
      <Route path="/login" exact render={(props) => <Login />} />
    </div>
  );
}

export default App;
