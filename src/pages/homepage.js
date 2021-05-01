import React, { useState} from "react";
// components
import MainContent from "../components/homepage_components/MainContent";
import Header from "../components/header";
import Navbar from "../components/homepage_components/navbar_homepage";
import Topics from "../components/homepage_components/keyword_homepage";
import Company from "../components/homepage_components/company_homepage";


function App() {
  // State variables 
  const [selevtedNav, setSelectedNav] = useState("latest");
  const [passedTopics, setPassedTopic] = useState("");
  const [passedCompany, setPassedCompany] = useState("");
  const [hiddenSection, setHiddenSection] = React.useState("hiddenDropdownFilter");

  // dropdown on mobile View
  const onClickMenu = () => {
    if (hiddenSection === "hiddenDropdownFilter")
      setHiddenSection("showDropdownFilter");
    else setHiddenSection("hiddenDropdownFilter");
  };

  // return body for homepage
  return (
    <div>
      {/* Header and main section */}
      <div className="homepageWhole">
        {/* Header component */}
        <Header />
        {/* Navbar component */}
        <Navbar setSelectedNav={setSelectedNav} />
        {/* blogs and tags section */}
        <main className="homepageContainer">
          {/* Blogs container */}
          <div className="left-container">
            <div className="mainContent left-tab">
              <div>
                <MainContent
                  setPassedTopic={setPassedTopic}
                  selevtedNav={selevtedNav}
                  passedTopics={passedTopics}
                  passedCompany={passedCompany}
                />
              </div>
            </div>
          </div>
          {/* Tags and filter container */}
          <div className="right-container">
            {/* button for dropdown in mobile view */}
            <div className="filterButton" onClick={() => onClickMenu()}>
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
            <div className={hiddenSection}>
              <div className="navSearch">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
              </div>
              <Topics
                passedTopics={passedTopics}
                setPassedTopic={setPassedTopic}
              />
              <Company setPassedCompany={setPassedCompany} />
            </div>
          </div>
        </main>
      </div>

      {/* footer */}
      <div class="footer">
        <div class="footer-contact">
          <span class="footer-contact-item">Contact us on:</span>
          <a class="footer-contact-item" href="mailto:admin@techvault.com">
            <span class=" icon-wrapper icon-ion" data-name="mail">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56zm-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26z"></path>
              </svg>
            </span>{" "}
            admin@techvault.com
          </a>
          .
          <span class="footer-contact-item">
            {" "}
            TechVault is a (Description Here)
          </span>
        </div>

        <div class="footer-links">
          <a href="/site/terms">Terms | </a>
          <a href="/site/privacy">Privacy | </a>
          <a href="/site/cookies-policy">Cookies policy</a>
        </div>
      </div>
    </div>
  );
}

export default App;
