import Pagination from "./pagination";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


const MainContent = (fromSiblings) => {
  const [blog, setBlog] = React.useState([]);
  const [blogs, setBlogs] = React.useState([]);
  const [pageNo, setPageNo] = React.useState([]);

  const onClickTopic = (e) => {
    fromSiblings.setPassedTopic(e);
  }

  React.useEffect(() => {
    try {
      console.log(fromSiblings);
      let link, cond = false;
      if(fromSiblings.passedTopics == "" && fromSiblings.passedCompany == ""){
        link = "http://localhost:8080/home/"+fromSiblings.selevtedNav+"/"
      }
      else if(fromSiblings.passedCompany != "" && fromSiblings.passedTopics==""){
        link = "http://localhost:8080/search/company/"+fromSiblings.passedCompany+"/"
      }
      else if(fromSiblings.passedCompany == "" && fromSiblings.passedTopics!=""){
        link = "http://localhost:8080/search/keyword/"+fromSiblings.passedTopics+"/"
      }
      else{
        link = "http://localhost:8080/search/keyword/"+fromSiblings.passedTopics+"/"
        cond = true;
      }

      fetch(link)
        .then((results) => results.json())
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            var x = {
              id: data[i].id,
              author: data[i].author,
              company: data[i].company,
              link: data[i].link,
              date: data[i].date,
              blogAbstract: data[i].blogAbstract,
              title: data[i].title,
              uuid: data[i].uuid,
              likes: data[i].likes,
              views: data[i].views,
              comments: data[i].comments,
              keywords: data[i].keywords
            };
            if (blog.indexOf(x) == -1) {
              if(cond == true && fromSiblings.passedCompany == x.company)
                blog.push(x);
              else if(cond == false)
                blog.push(x);
            }
          }
          setBlogs( arr => [...arr, `${arr.length}`]);
          blog.length = 0
        }); // fetching latest blogs
      
    } catch (err) {
      alert(err); // Failed to fetch
    }
  }, [fromSiblings]);

  return (
    <div>
      {blog.map((e) => (
        <div className="container">
          <div className="flex_box">
            <div className="blankContainer main-tab"></div>
            <div className="contentContainer main-tab">
              <div className="content-heading">
                <p>{e.title}</p>
              </div>
              <div className="content-time">
                <p>
                  {e.date} | by {e.author} | in {e.company} Blog
                </p>
              </div>
              <div className="content-description">
                <p>{e.blogAbstract}[...]</p>
              </div>
              <div className="content-tags">
                {e.keywords.map(function(name, index){
                    return <div key={ index } onClick={() => onClickTopic(name)}>{name}</div>;
                  })}
                  
              </div>
            </div>
            <div className="statsContainer main-tab">
              <div>
                <span>👍</span> {e.likes}
              </div>
              <div>{e.comments} Comments</div>
              <div>Blog</div>
            </div>
          </div>
        </div>
      ))}
      <div>
        <Pagination setPageNo={setPageNo}/>
      </div>
    </div>
  );
};

export default MainContent;
