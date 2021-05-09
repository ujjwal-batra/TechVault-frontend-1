import React, { useState, useEffect } from "react";
import axios from "axios"

import BlogImage from "../components/homepage_components/homepage_blog_image"
import BlogContent from "../components/homepage_components/homepage_blog_content"
import BlogStats from "../components/homepage_components/homepage_blog_stats"

const MainContent = (fromSiblings) => {
  const [blog, setBlog] = React.useState([]);
  const [blogs, setBlogs] = React.useState([]);
  const [prevLink, setPrevLink] = React.useState("");
  const [loadNo, setLoadNo] = React.useState(1);
  const [loader, setLoader] = React.useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [postReq, setPostReq] = useState(false);
  

  // To set selected topics
  // const onClickTopic = (e) => {
  //   fromSiblings.setPassedTopic((arr) => [...arr, e]);
  // };
  
  // To check scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, blog]);

  // handle stroll to bottom
  function handleScroll() {
    var x = document.documentElement.scrollTop + 1;
    if (
      window.innerHeight + x <= document.documentElement.offsetHeight 
    )
      return;
    setIsFetching(true);
  }

  // To fetch on scroll to bottom
  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function getBlogRequest(link) {
    fetch(link)
      .then((results) => results.json())
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            var companyLink = data[i].link.substring(8, data[i].link.length);
            var imgLink = "";
            for (let j = 0; j < companyLink.length; j++) {
              if (companyLink[j] === "/") break;
              imgLink += companyLink[j];
            }
            if (imgLink === "tech.ebayinc.comhttps:")
              imgLink = "tech.ebayinc.com";
            imgLink = "//logo.clearbit.com/" + imgLink + "?size=180";
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
              keywords: data[i].keywords,
              imgLink: imgLink,
              commentLink: "comment/" + data[i].id,
            };
            if (blog.indexOf(x) === -1) {
              blog.push(x);
            }
            setBlogs([]);
          }
      }); 
  }

  function postBlogRequest(details, link) {
    axios({
      method: "POST",
      url: link,
      data: details
    }).then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        var companyLink = res.data[i].link.substring(8, res.data[i].link.length);
        var imgLink = "";
        for (let j = 0; j < companyLink.length; j++) {
          if (companyLink[j] === "/") break;
          imgLink += companyLink[j];
        }
        if (imgLink === "tech.ebayinc.comhttps:")
          imgLink = "tech.ebayinc.com";
        imgLink = "//logo.clearbit.com/" + imgLink + "?size=180";
        var x = {
          id: res.data[i].id,
          author: res.data[i].author,
          company: res.data[i].company,
          link: res.data[i].link,
          date: res.data[i].date,
          blogAbstract: res.data[i].blogAbstract,
          title: res.data[i].title,
          uuid: res.data[i].uuid,
          likes: res.data[i].likes,
          views: res.data[i].views,
          comments: res.data[i].comments,
          keywords: res.data[i].keywords,
          imgLink: imgLink,
          commentLink: "comment/" + res.data[i].id,
        };
        if (blog.indexOf(x) === -1) {
          blog.push(x);
        }
        setBlogs([]);
      }
    })
  }

  // To fetch called from useEffect
  function fetchMoreListItems() {
    // setTimeout(() => {
      try {
        // scrolled get request
        if(postReq == false){
          let link = prevLink + "?pageNo=" + loadNo;
          getBlogRequest(link);
        }
        // scrolled post request
        else{
          var details;
          if(prevLink == "http://localhost:8080/search/keyword/")
            details = {"searchWords" : fromSiblings.passedTopics};
          else
            details = {"searchWords" : fromSiblings.passedCompany};
          var link = prevLink + "?pageNo=" + loadNo;
          postBlogRequest(details, link);
        }
      } catch (err) {
        alert(err); // Failed to fetch
      }

      // setting the states to call again
      setIsFetching(false);
      setLoadNo(loadNo + 1);
    // }, 2000);
  }


  // to call When the states change and initial call
  React.useEffect(() => {
    console.log("changed")
    try {
      let link, cond = false, post_req = false;
      blog.length = 0;
      // Check for passed parameter to search
      if (
        fromSiblings.passedTopics.length == 0 &&
        fromSiblings.passedCompany.length == 0
      ) {
        link = "http://localhost:8080/home/" + fromSiblings.selevtedNav
        post_req = false;
        setPostReq(false);
        setLoadNo(1);
      } else if (
        fromSiblings.passedCompany.length != 0 &&
        fromSiblings.passedTopics.length == 0
      ) {
        link = "http://localhost:8080/search/company/"
        post_req = true;
        setPostReq(true);
        setLoadNo(1);
      } else if (
        fromSiblings.passedCompany.length == 0 &&
        fromSiblings.passedTopics.length != 0
      ) {
        link = "http://localhost:8080/search/keyword/"
        post_req = true;
        setPostReq(true);
        setLoadNo(1);
      } else {
        link = "http://localhost:8080/search/keyword/"
        cond = true;
        post_req = true;
        setPostReq(true);
        setLoadNo(1);
      }
      
      // initail get request
      if(post_req == false){
        setPrevLink(link);
        getBlogRequest(link);
      }
      // initial post request
      else{
        setPrevLink(link);
        var details;
        if(link == "http://localhost:8080/search/keyword/")
          details = {"searchWords" : fromSiblings.passedTopics};
        else
          details = {"searchWords" : fromSiblings.passedCompany};
        postBlogRequest(details, link)
      }
    } catch (err) {
      alert(err); // Failed to fetch
    }
  }, [fromSiblings]);

  return (
    <div>
      {blog.map((e) => (
        <div className="container">
          <div className="flex_box">
            
            {/* Company logo */}
            <BlogImage image={e.imgLink}/>

            {/* abstract, title, date, author */}
            <div className="contentContainer">
                <BlogContent content={e}/>
                <div className="content-tags">
                    {e.keywords.slice(0, 3).map(function (name, index) {
                    return (
                        <div key={index} >
                        {name}
                        </div>
                    );
                    })}
                </div>
            </div>
            {/* Likes, comment type */}
            <BlogStats stats={e}/>

          </div>
        </div>
      ))}

      {/* Loader */}
      <div className="loading">
        <div className="loader-ellips">
            <span className="loader-ellips__dot"></span>
            <span className="loader-ellips__dot"></span>
            <span className="loader-ellips__dot"></span>
            <span className="loader-ellips__dot"></span>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
