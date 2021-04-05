import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import LoginForm from "./components/loginForm";

function App() {
  return (
    <div className="app">
      <Header />
      <LoginForm />
    </div>
  );
}

export default App;
