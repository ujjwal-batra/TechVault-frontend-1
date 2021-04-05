import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import SignupForm from "./components/signupform";


function App() {
  

  return (
    <div className="app">
        <Header />
        <SignupForm />
      
    </div>
  );
}

export default App;
