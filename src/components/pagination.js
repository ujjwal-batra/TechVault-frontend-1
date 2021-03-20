import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const MainContent = ({setPageNo}) => {
  const pages = [1,2,3,4,5,6,7,8,9,10];

  const onClickPage = (e) => {
    setPageNo(e.e -1);
    console.log(e);
  }

  return (
    <div>
      {pages.map((e) => (
        <span class="pagination_button" onClick={() => onClickPage({e})}>
          {e}
        </span>
      ))}
    </div>
  )
};

export default MainContent;
