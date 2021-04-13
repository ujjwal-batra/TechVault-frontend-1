import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const header = ({ setSelectedNav }) => {
  const onClickNav = (e) => {
    // console.log(e);
    setSelectedNav(e);
  };

  return (
    <div>
      <nav>
        <div className="navLinks">
          <button onClick={() => onClickNav("latest")}>Latest</button>
          <button onClick={() => onClickNav("liked")}>Top Liked</button>
          <button onClick={() => onClickNav("viewed")}>Top Viewed</button>
        </div>
      </nav>
    </div>
  );
};

export default header;
