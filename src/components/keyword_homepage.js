import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";

let tempSelectedTopics = [];

const RightTags = ({ setPassedTopic }, passedTopics) => {
  const [topic, setTopic] = React.useState([]);
  const [topics, setTopics] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [selectedTopics, setSelectedTopics] = React.useState(null);

  const SelectedTagDisplay = () => {
    if (selectedTopics == null || selectedTopics == "") return null;
    else
      return (
        <div style={{ background: `#F4E8C8` }}>
          {selectedTopics}{" "}
          <span onClick={() => onClickDeselct({ selectedTopics })}>
            &#10006;
          </span>
        </div>
      );
  };

  const onchange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filteredTopics = topics.filter((x) => {
    return x.keyword.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const onClickTopic = (e) => {
    setSelectedTopics(e);
    console.log(e);
    setPassedTopic(e);
  };

  const onClickDeselct = (e) => {
    setSelectedTopics("");
    setPassedTopic("");
  };

  React.useEffect(() => {
    try {
      fetch("http://localhost:8080/home/keywordsCount")
        .then((results) => results.json())
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            var x = {
              keyword: data[i].keyword,
              frequency: data[i].frequency,
            };
            if (topic.indexOf(x) === -1) {
              topic.push(x);
            }
          }
          setTopics(topic);
        }); // fetching latest blogs
    } catch (err) {
      alert(err); // Failed to fetch
    }
  }, [topic]);

  return (
    <div>
      <div className="tagsContainerTopics">
        <div className="tags-heading">
          <span class="text-300 text-lg tags-title">
            <i class="fa fa-bookmark-o" aria-hidden="true"></i>&nbsp; Topics
          </span>

          <div className="tags-values">
            <SelectedTagDisplay />
          </div>

          <div className="search-tags">
            <input
              class="search-tags-input"
              type="text"
              name="topicSearch"
              placeholder="Search for Tags..."
              onChange={onchange}
            />
          </div>
        </div>

        <div className="tags-values">
          {filteredTopics.slice(0, 5).map((e) => (
            <div
              style={{ background: `#F4E8C8` }}
              onClick={() => onClickTopic(e.keyword)}
            >
              {e.keyword} | <span>{e.frequency}</span>
            </div>
          ))}
        </div>

        {/* <hr /> */}
      </div>
    </div>
  );
};

export default RightTags;
