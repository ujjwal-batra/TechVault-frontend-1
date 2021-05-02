import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainContent = (fromSiblings) => {
  const [blog, setBlog] = React.useState([]);
  const [blogs, setBlogs] = React.useState([]);
  const [prevLink, setPrevLink] = React.useState("");
  const [loadNo, setLoadNo] = React.useState(1);
  const [loader, setLoader] = React.useState(1);
  const [isFetching, setIsFetching] = useState(false);

  // To set selected topics
  const onClickTopic = (e) => {
    fromSiblings.setPassedTopic(e);
  };

  // To check scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // handle stroll to bottom
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleScroll() {
    var x = document.documentElement.scrollTop + 1;
    if (
      window.innerHeight + x <= document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  // To fetch on scroll to bottom
  useEffect(() => {
    if (!isFetching) return;
    setLoader("loading");
    fetchMoreListItems();
    setLoader("hideLoading");
  }, [fetchMoreListItems, isFetching]);

  // To fetch called from useEffect
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function fetchMoreListItems() {
    setTimeout(() => {
      try {
        let link = prevLink + "?pageNo=" + loadNo;
        console.log(link);
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
            }
          }); // fetching latest blog
      } catch (err) {
        alert(err); // Failed to fetch
      }

      setIsFetching(false);
      setLoadNo(loadNo + 1);
    }, 2000);
  }

  // to call When the states change and initial call
  React.useEffect(() => {
    try {
      let link,
        cond = false;
      // Check for passed parameter to search
      if (
        fromSiblings.passedTopics === "" &&
        fromSiblings.passedCompany === ""
      ) {
        link = "http://localhost:8080/home/" + fromSiblings.selevtedNav;
        if (prevLink !== link) {
          blog.length = 0;
          setLoadNo(1);
        }
      } else if (
        fromSiblings.passedCompany !== "" &&
        fromSiblings.passedTopics === ""
      ) {
        link =
          "http://localhost:8080/search/company/" + fromSiblings.passedCompany;
        if (prevLink !== link) {
          blog.length = 0;
          setLoadNo(1);
        }
      } else if (
        fromSiblings.passedCompany === "" &&
        fromSiblings.passedTopics !== ""
      ) {
        link =
          "http://localhost:8080/search/keyword/" + fromSiblings.passedTopics;
        if (prevLink !== link) {
          blog.length = 0;
          setLoadNo(1);
        }
      } else {
        link =
          "http://localhost:8080/search/keyword/" + fromSiblings.passedTopics;
        cond = true;
        if (prevLink !== link) {
          blog.length = 0;
          setLoadNo(1);
        }
      }

      setPrevLink(link);
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
              if (cond === true && fromSiblings.passedCompany === x.company)
                blog.push(x);
              else if (cond === false) blog.push(x);
            }
          }
          setBlogs((arr) => [...arr, `${arr.length}`]);
        }); // fetching latest blog
    } catch (err) {
      alert(err); // Failed to fetch
    }
  }, [blog, fromSiblings, prevLink]);

  return (
    <div>
      {blog.map((e) => (
        <div className="container">
          <div className="flex_box">
            {/* Company logo */}
            <div className="blankContainer ">
              <img
                src={e.imgLink}
                alt="Company Logo"
                width="175"
                height="175"
              />
            </div>

            {/* abstract, title, date, author */}
            <div className="contentContainer">
              <div className="content-heading">
                <Link
                  to={{
                    pathname: "/comment",
                    aboutProps: {
                      data: e,
                    },
                  }}
                >
                  <p>{e.title}</p>
                </Link>
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
                {e.keywords.slice(0, 3).map(function (name, index) {
                  return (
                    <div key={index} onClick={() => onClickTopic(name)}>
                      {name}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Likes, comment type */}
            <div className="statsContainer">
              <div>
                <span>
                  <i className="fa fa-thumbs-up" aria-hidden="true"></i>{" "}
                </span>{" "}
                {e.likes}
              </div>
              <br></br>
              <div>
                <span>
                  <i className="fa fa-comment-o" aria-hidden="true"></i>{" "}
                </span>
                {e.comments}
              </div>
              <br></br>
              <div>
                <span>
                  <i className="fa fa-book" aria-hidden="true"></i>{" "}
                </span>
                Blog
              </div>
            </div>
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
