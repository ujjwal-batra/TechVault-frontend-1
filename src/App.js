import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/header";
import Navbar from "./components/navbar_homepage";
import Topics from "./components/keyword_homepage";
import Company from "./components/company_homepage";
import Pagination from "./components/pagination";
import React, { useState, useEffect } from "react";

function App() {

  const [selevtedNav, setSelectedNav] = useState('latest'); 
  const [passedTopics, setPassedTopic] = useState("");
  const [passedCompany, setPassedCompany] = useState("");
  const [pageNo, setPageNo] = React.useState(0);
  
  return (
    <div className="app">
      <Header />
      <Navbar setSelectedNav={setSelectedNav}/>

      <main>
        <div className="left-container">
          <div className="mainContent left-tab">
            <div>
              <MainContent setPassedTopic={setPassedTopic} pageNo={pageNo} selevtedNav={selevtedNav} passedTopics={passedTopics} passedCompany={passedCompany} />
            </div>
            <div className="page-selector">
              <Pagination setPageNo={setPageNo} />
            </div>
          </div>
          
        </div>

        <div className="right-container">
          <Topics passedTopics={passedTopics} setPassedTopic={setPassedTopic} setPageNo={setPageNo} />
          <Company setPassedCompany={setPassedCompany} />
        </div>
      </main>
    </div>
  )
};


export default App;
