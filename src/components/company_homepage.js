import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";

const RightTags = ({ setPassedCompany }) => {
  const [company, setCompany] = React.useState([]);
  const [companies, setCompanies] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [selectedCompanies, setSelectedCompanies] = React.useState();
  const [companyVisible, setCompanyVisible] = React.useState(10);

  const onClickShowMore = () => {
    setCompanyVisible(companyVisible + 10);
  };

  const SelectedTagDisplay = () => {
    if (selectedCompanies == null || selectedCompanies === "") return null;
    else
      return (
        <div
          style={{ background: `#3a4251`, color: `#eee`, cursor: `pointer` }}
        >
          {selectedCompanies}{" "}
          <span
            style={{ padding: `5px` }}
            onClick={() => onClickDeselct(selectedCompanies)}
          >
            &#10006;
          </span>
        </div>
      );
  };

  const onchange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  const filteredTopics = companies.filter((x) => {
    return x.company.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const onClickTopic = (e) => {
    setSelectedCompanies(e);
    setPassedCompany(e);
  };

  const onClickDeselct = (e) => {
    setSelectedCompanies("");
    setPassedCompany("");
  };

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
          <span class=" tags-title">
            <i class="fa fa-building-o" aria-hidden="true"></i>&nbsp; Companies
          </span>

          <div className="tags-values">
            <SelectedTagDisplay />
          </div>
          <div className="search-tags">
            <input
              class="search-tags-input"
              type="text"
              name="topicSearch"
              placeholder="Search for Tags"
              onChange={onchange}
            />
          </div>
        </div>
        <div className="tags-values">
          {filteredTopics.slice(0, companyVisible).map((e) => (
            <div
              style={{ background: `#eee` }}
              onClick={() => onClickTopic(e.company)}
            >
              {e.company}
              <span className="tags-counts"> {e.count}</span>
            </div>
          ))}
        </div>

        {/* <div className="showMoreButton" onClick={() => onClickShowMore()}>
          <span>Show More</span>
          &nbsp;
          <i className="fa fa-chevron-circle-down"></i>
        </div> */}
        <div className="showMoreButton" onClick={() => onClickShowMore()}>
          <span class="text">
            Show More &nbsp;
            <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightTags;
