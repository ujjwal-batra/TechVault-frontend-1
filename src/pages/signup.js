import React, { useState, useEffect } from "react";

// components 
import Header from "../components/header";
import SignupForm from "../components/signupform";

function App() {
  return (
    <div className="app">
      <Header />
      <SignupForm />
    </div>
  );
}

export default App;
