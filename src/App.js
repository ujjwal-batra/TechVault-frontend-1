import "./App.css";
import MainContent from "./components/MainContent";
import RightTags from "./components/Tags";
import Header from "./components/header";
import Navbar from "./components/navbar_homepage";
import React, { useState, useEffect } from "react";

function App() {

  const [selevtedNav, setSelectedNav] = useState('latest'); 
  const [passedTopics, setPassedTopic] = useState([]);
  
  return (
    <div className="app">
      <Header />
      <Navbar setSelectedNav={setSelectedNav}/>

      <main>
        <div className="left-container">
          <div className="mainContent left-tab">
            <MainContent selevtedNav={selevtedNav}/>
          </div>
        </div>

        <div className="right-container">
          <RightTags />
        </div>
      </main>

    </div>
  )
};


export default App;
