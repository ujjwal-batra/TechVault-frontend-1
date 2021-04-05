import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const MainContent = (fromParent) => {
  const pages = [];
  for (let i = 0; i < 10; i++) {
    pages.push(i + 1);
  }

  const onClickPage = (e) => {
    fromParent.setPageNo(e.e - 1);
    // console.log(e);
  };

  return (
    <div className="Pages-selector-section">
      {pages.map((e) => (
        <span class="pagination_button" onClick={() => onClickPage({ e })}>
          {e}
        </span>
      ))}
    </div>
  );
};

export default MainContent;
