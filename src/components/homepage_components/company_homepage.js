import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";

const RightTags = ({ setPassedCompany }) => {
  const [company, setCompany] = React.useState([]);
  const [companies, setCompanies] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [selectedCompanies, setSelectedCompanies] = React.useState();
  const [companyVisible, setCompanyVisible] = React.useState(10);

  // show more button
  const onClickShowMore = () => {
    setCompanyVisible(companyVisible + 10);
  };

  // component for selected company tag
  const SelectedTagDisplay = () => {
    if (selectedCompanies == null || selectedCompanies === "") return null;
    else
      return (
        <div
          style={{ background: `#6C63FF`, color: `white`, cursor: `pointer` }}
        >
          {selectedCompanies}{" "}
          <span
            style={{ padding: `5px` }}
            onClick={() => onClickDeselct(selectedCompanies)}
          >
            &#10007;
          </span>
        </div>
      );
  };

  // for handling search input
  const onchange = (e) => {
    setSearch(e.target.value);
  };

  // filtered topic list
  const filteredTopics = companies.filter((x) => {
    return x.company.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  // on selection of company
  const onClickTopic = (e) => {
    setSelectedCompanies(e);
    setPassedCompany(e);
  };

  // on deselecting companies
  const onClickDeselct = (e) => {
    setSelectedCompanies("");
    setPassedCompany("");
  };

  // fetching list of companies
  React.useEffect(() => {
    try {
      fetch("http://localhost:8080/home/blogsCount")
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
          <div className="tags-values">
            <SelectedTagDisplay />
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
        <div className="tags-values">
          {filteredTopics.slice(0, companyVisible).map((e) => (
            <div
              className="tags-Values-style"
              onClick={() => onClickTopic(e.company)}
            >
              {e.company}
              <span className="tags-counts"> {e.count}</span>
            </div>
          ))}
        </div>

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
