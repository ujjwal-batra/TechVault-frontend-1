import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";

const RightTags = () => {
  const [company, setCompany] = React.useState([]);
  const [companies, setCompanies] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [selectedCompanies, setSelectedCompanies] = React.useState([]);

  const onchange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filteredTopics = companies.filter((x) => {
    return x.company.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const onClickTopic = (e) => {
    setSelectedCompanies((arr) => [...arr, e]);
  };

  const onClickDeselct = (e) => {
    setSelectedCompanies(selectedCompanies.filter((x) => x !== e));
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
      <div className="tagsContainer">
        <div className="tags-heading">
          <span class="text-300 text-lg tags-title">
            <i class="fa fa-building-o" aria-hidden="true"></i>&nbsp; Companies
          </span>

          <div className="tags-values">
            {selectedCompanies.map((e) => (
              <div style={{ background: `#F4E8C8` }}>
                {e} <span onClick={() => onClickDeselct(e)}>&#10006;</span>
              </div>
            ))}
          </div>
          <div>
            <input
              type="text"
              name="topicSearch"
              placeholder="Search Topic..."
              onChange={onchange}
            />
          </div>
        </div>
        <div className="tags-values">
          {filteredTopics.slice(0, 10).map((e) => (
            <div
              style={{ background: `#F4E8C8` }}
              onClick={() => onClickTopic(e.company)}
            >
              {e.company}
              <span>({e.count})</span>
            </div>
          ))}
        </div>

        <hr />
      </div>
    </div>
  );
};

export default RightTags;
