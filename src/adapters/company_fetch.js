import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

import SelectedTags from "../components/homepage_components/homepage_selected_tags";
import Tags from "../components/homepage_components/homepage_tags";

const RightTags = ({ setPassedCompany }) => {
  const [company, setCompany] = React.useState([]);
  const [companies, setCompanies] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [selectedCompanies, setSelectedCompanies] = React.useState([]);
  const [companyVisible, setCompanyVisible] = React.useState(10);
  const type = "company";

  // show more button
  const onClickShowMore = () => {
    setCompanyVisible(companyVisible + 10);
  };

  // for handling search input
  const onchange = (e) => {
    setSearch(e.target.value);
  };

  // filtered topic list
  const filteredTopics = companies.filter((x) => {
    return x.company.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  // fetching list of companies
  React.useEffect(async () => {
    try {
      await fetch("/:8080/home/blogsCount")
        .then((results) => results.json())
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            var x = {
              company: data[i].company,
              count: data[i].count,
            };
            if (
              company.indexOf(x) === -1 &&
              x.company != null &&
              x.count != null
            ) {
              company.push(x);
            }
          }
          setCompanies(company);
        }); // fetching latest blogs
    } catch (err) {
      alert(err); // Failed to fetch
    }
  }, [company]);

  return (
    <div>
      <div className="tagsContainerCompanies">
        <div className="tags-heading">
          <span className=" tags-title">
            <i className="fa fa-building-o" aria-hidden="true"></i>&nbsp;
            Companies
          </span>

          {/* selected tags */}
          <div className="tags-value">
            <SelectedTags
              setSelectedTopics={setSelectedCompanies}
              setPassedTopic={setPassedCompany}
              dataPassed={selectedCompanies}
            />
          </div>

          <div className="search-tags">
            <input
              className="search-tags-input"
              type="text"
              name="topicSearch"
              placeholder="Search for Tags"
              onChange={onchange}
            />
          </div>
        </div>

        {/* Tags unselected */}
        <Tags
          setSelectedTopics={setSelectedCompanies}
          setPassedTopic={setPassedCompany}
          dataPassed={filteredTopics}
          topicVisible={companyVisible}
          type={type}
        />

        {/* show more button */}
        <div className="showMoreButton" onClick={() => onClickShowMore()}>
          <span className="text">
            Show More &nbsp;
            <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightTags;
