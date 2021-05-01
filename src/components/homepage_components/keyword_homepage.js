import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";

const RightTags = ({ setPassedTopic }) => {
  const [topic, setTopic] = React.useState([]);
  const [topics, setTopics] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [selectedTopics, setSelectedTopics] = React.useState(null);
  const [topicVisible, setTopicVisible] = React.useState(5);

  // component for returning selected tags
  const SelectedTagDisplay = () => {
    if (selectedTopics === null || selectedTopics === "") return null;
    else
      return (
        <div
          style={{ background: `#6C63FF`, color: `white`, cursor: `pointer` }}
        >
          {selectedTopics}{" "}
          <span
            style={{ padding: `5px` }}
            onClick={() => onClickDeselct({ selectedTopics })}
          >
            &#10007;
          </span>
        </div>
      );
  };

  // show more for topics
  const onClickShowMore = () => {
    setTopicVisible(topicVisible + 10);
  };

  // search input tracker
  const onchange = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  // search for topic
  const filteredTopics = topics.filter((x) => {
    return x.keyword.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  // On topic click
  const onClickTopic = (e) => {
    setSelectedTopics(e);
    setPassedTopic(e);
  };
  // on deselecting topic
  const onClickDeselct = (e) => {
    setSelectedTopics("");
    setPassedTopic("");
  };

  // fetch call to get keywords
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

          {/* Selectrd tag display */}
          <div className="tags-values">
            <SelectedTagDisplay />
          </div>

          {/* input container for search */}
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

        {/* unselected tags display */}
        <div className="tags-values">
          {filteredTopics.slice(0, topicVisible).map((e) => (
            <div
              className="tags-Values-style"
              onClick={() => onClickTopic(e.keyword)}
            >
              {e.keyword} <span className="tags-counts">{e.frequency}</span>
            </div>
          ))}
        </div>

        {/* show more button */}
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
