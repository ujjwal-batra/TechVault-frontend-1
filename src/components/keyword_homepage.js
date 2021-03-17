import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";

let tempSelectedTopics = [];

const RightTags = () => {
  const [topic, setTopic] = React.useState([]);
  const [topics, setTopics] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [selectedTopics, setSelectedTopics] = React.useState([]);

  const onchange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filteredTopics = topics.filter(x => {
    return x.keyword.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const onClickTopic= (e)=>{
    setSelectedTopics( arr => [...arr, e]);
    
  }

  const onClickDeselct= (e)=>{
    setSelectedTopics(selectedTopics.filter((x)=>(x !== e)))
  }

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
      <div className="tagsContainer">
        <div className="tags-heading">
          <span class="text-300 text-lg tags-title">
            <i class="fa fa-bookmark-o" aria-hidden="true"></i>&nbsp; Topics
          </span>
          
          <div className="tags-values">
            {selectedTopics.map((e) => (
              <div style={{ background: `#F4E8C8` }}>
                {e} <span onClick={()=>onClickDeselct(e)}>&#10006;</span>
              </div>
            ))}
          </div>

          <div>
            <input type="text" name="topicSearch" placeholder="Search Topic..." onChange={onchange} />
          </div>
        
        </div>
        
        <div className="tags-values">
          {filteredTopics.slice(0,5).map((e) => (
            <div style={{ background: `#F4E8C8` }} onClick={()=>onClickTopic(e.keyword)}>
              {e.keyword} <span> ({e.frequency})</span>
            </div>
          ))}
        </div>

        <hr />

      </div>

      
    </div>
  );
};

export default RightTags;
