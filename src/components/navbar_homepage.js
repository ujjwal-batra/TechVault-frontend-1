import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Header = ({ setSelectedNav }) => {
  const [latest, setLatest] = React.useState("fa fa-check");
  const [liked, setLiked] = React.useState();
  const [viewed, setViewed] = React.useState();

  const onClickNav = (e) => {
    setSelectedNav(e);
    if (e === "latest") {
      setLatest("fa fa-check");
      setLiked("");
      setViewed("");
    }
    if (e === "liked") {
      setLiked("fa fa-check");
      setLatest("");
      setViewed("");
    }
    if (e === "viewed") {
      setViewed("fa fa-check");
      setLiked("");
      setLatest("");
    }
  };

  return (
    <div>
      <nav>
        <div className="navLinks">
          <button className={latest} onClick={() => onClickNav("latest")}>
            Latest
          </button>
          <button className={liked} onClick={() => onClickNav("liked")}>
            Top Liked
          </button>
          <button className={viewed} onClick={() => onClickNav("viewed")}>
            Top Viewed
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
