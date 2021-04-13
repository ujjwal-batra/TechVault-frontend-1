import "./App.css";
import MainContent from "./components/MainContent";
import Header from "./components/header";
import Navbar from "./components/navbar_homepage";
import Topics from "./components/keyword_homepage";
import Company from "./components/company_homepage";
import Pagination from "./components/pagination";
import React, { useState, useEffect } from "react";

function App() {
  const [selevtedNav, setSelectedNav] = useState("latest");
  const [passedTopics, setPassedTopic] = useState("");
  const [passedCompany, setPassedCompany] = useState("");
  const [pageNo, setPageNo] = React.useState(0);
  const [hiddenSection, setHiddenSection] = React.useState("hiddenDropdownFilter");
  
  const onClickMenu = () => {
    if(hiddenSection == "hiddenDropdownFilter")
      setHiddenSection("showDropdownFilter")
    else
      setHiddenSection("hiddenDropdownFilter")
    console.log(hiddenSection)
  };

  return (
    <div className="app">
      <div className="homepageWhole">
        <Header />
        <Navbar setSelectedNav={setSelectedNav} />

        <main className="homepageContainer">
          <div className="left-container">
            <div className="mainContent left-tab">
              <div>
                <MainContent
                  setPassedTopic={setPassedTopic}
                  pageNo={pageNo}
                  selevtedNav={selevtedNav}
                  passedTopics={passedTopics}
                  passedCompany={passedCompany}
                />
              </div>
              <div className="page-selector">
                <Pagination setPageNo={setPageNo} />
              </div>
            </div>
          </div>

          <div className="right-container">
            <div className="filterButton" onClick={() => onClickMenu()}>
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
            <div className={hiddenSection}>
              <div className="navSearch">
                <input type="text" name="search" id="search" placeholder="Search" />
              </div>
              <Topics
                passedTopics={passedTopics}
                setPassedTopic={setPassedTopic}
                setPageNo={setPageNo}
              />
              <Company setPassedCompany={setPassedCompany} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
