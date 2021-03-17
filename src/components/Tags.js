import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import KeywordsTag from "./keyword_homepage";
import CompaniesTag from "./company_homepage";
import "font-awesome/css/font-awesome.min.css";

const RightTags = () => {

  return (
    <div>
      <KeywordsTag />

      <CompaniesTag />

    </div>
  );
};

export default RightTags;
