import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const MainContent = () => {
  const [blog, setBlog] = React.useState([]);
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(async () => {
    try {
      await fetch("http://localhost:8080/home/latest/")
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
            };
            if (blog.indexOf(x) == -1) {
              blog.push(x);
            }
          }
          setBlogs(blog);
        }); // fetching latest blogs
    } catch (err) {
      alert(err); // Failed to fetch
    }
  }, []);

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
                <div>Cloud</div>
                <div>Java</div>
                <div>Microservices</div>
              </div>
            </div>
            <div className="statsContainer main-tab">
              <div>
                <span>★</span> {e.likes}
              </div>
              <div>{e.comments} Comments</div>
              <div>Blog</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
