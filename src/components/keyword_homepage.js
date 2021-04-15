import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";

let tempSelectedTopics = [];

const RightTags = ({ setPassedTopic }, passedTopics) => {
  const [topic, setTopic] = React.useState([]);
  const [topics, setTopics] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [selectedTopics, setSelectedTopics] = React.useState(null);
  const [topicVisible, setTopicVisible] = React.useState(5);

  const SelectedTagDisplay = () => {
    if (selectedTopics === null || selectedTopics === "") return null;
    else
      return (
        <div
          style={{ background: `#3a4251`, color: `#eee`, cursor: `pointer` }}
        >
          {selectedTopics}{" "}
          <span
            style={{ padding: `5px` }}
            onClick={() => onClickDeselct({ selectedTopics })}
          >
            &#10006;
          </span>
        </div>
      );
  };

  const onClickShowMore = () => {
    setTopicVisible(topicVisible + 10);
  };

  const onchange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  const filteredTopics = topics.filter((x) => {
    return x.keyword.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const onClickTopic = (e) => {
    setSelectedTopics(e);
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
              placeholder="Search for Tags"
              onChange={onchange}
            />
          </div>
        </div>

        <div className="tags-values">
          {filteredTopics.slice(0, topicVisible).map((e) => (
            <div
              style={{ background: `#eee` }}
              onClick={() => onClickTopic(e.keyword)}
            >
              {e.keyword} <span className="tags-counts">{e.frequency}</span>
            </div>
          ))}
        </div>
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
