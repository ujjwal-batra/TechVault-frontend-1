import React from "react";
import "font-awesome/css/font-awesome.min.css";

import SelectedTags from "../components/homepage_components/homepage_selected_tags";
import Tags from "../components/homepage_components/homepage_tags";

const RightTags = ({ setPassedTopic }) => {
  const [topic, setTopic] = React.useState([]);
  const [topics, setTopics] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [selectedTopics, setSelectedTopics] = React.useState([]);
  const [topicVisible, setTopicVisible] = React.useState(5);
  const type = "topic";
  // show more for topics
  const onClickShowMore = () => {
    setTopicVisible(topicVisible + 10);
  };
  // show less for topics
  const onClickShowLess = () => {
    if(topicVisible > 5)
      setTopicVisible(topicVisible - 10);
  };

  // search input tracker
  const onchange = (e) => {
    setSearch(e.target.value);
  };

  // search for topic
  const filteredTopics = topics.filter((x) => {
    return x.keyword.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  // fetch call to get keywords
  React.useEffect(async () => {
    try {
      await fetch("http://techvault.tech:8080/home/keywordsCount")
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
          <span className="text-300 text-lg tags-title">
            <i className="fa fa-bookmark-o" aria-hidden="true"></i>&nbsp; Topics
          </span>

          {/* Selectrd tag display */}
          <div className="tags-value">
            <SelectedTags
              setSelectedTopics={setSelectedTopics}
              setPassedTopic={setPassedTopic}
              dataPassed={selectedTopics}
            />
          </div>

          {/* input container for search */}
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

        {/* unselected tags display */}
        <Tags
          setSelectedTopics={setSelectedTopics}
          setPassedTopic={setPassedTopic}
          dataPassed={filteredTopics}
          topicVisible={topicVisible}
          type={type}
        />

        <div className="showButtons">
          {/* show more button */}
          <div className="showMoreButton" onClick={() => onClickShowMore()}>
            <span className="showMoreButtonSpan">
              Show More &nbsp;
              <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
            </span>
          </div>
          {/* show less button */}
          <div className="showMoreButton" onClick={() => onClickShowLess()}>
            <span className="showLessButtonSpan">
              Show Less &nbsp;
              <i className="fa fa-chevron-circle-up" aria-hidden="true"></i>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RightTags;
