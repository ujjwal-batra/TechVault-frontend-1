import React from "react";
import { Route } from "react-router-dom";
import "./styles/App.css";
//Routes used on the website
import Homepage from "./pages/homepage";
import Signup from "./pages/signup";
import Login from "./pages/login";
import CommentPage from "./pages/commentpage";

function App() {
  return (
    <div className="App">
      {/* Homepage Page */}
      <Route path="/" exact render={(props) => <Homepage />} />
      {/* Signup Page */}
      <Route path="/signup" exact render={(props) => <Signup />} />
      {/* Login Page */}
      <Route path="/login" exact render={(props) => <Login />} />
      {/* Comment Page */}
      {/* <Route path="/comment" exact render={(props) => <CommentPage />} /> */}
    </div>
  );
}

export default App;
