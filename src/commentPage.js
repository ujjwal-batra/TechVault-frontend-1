import React from "react";
import { useEffect, useLocation } from "react-router-dom";
import Header from "./components/header";

function CommentPage() {
  const [comments, setComments] = React.useState([]);

  const props = useLocation();
  const blogData = props.aboutProps.data;

  React.useEffect(() => {
    try {
      let link = "http://localhost:8080/comment/987";

      // console.log(link);
      fetch(link)
        .then((results) => results.json())
        .then((data) => {
          for (var i = 0; i < data.length; i++) {
            var x = {
              commentId: data[i].commentId,
              contentId: data[i].contentId,
              userName: data[i].userName,
              postedTime: data[i].postedTime,
              comment: data[i].comment,
              childComments: data[i].childComments,
            };
            if (comments.indexOf(x) === -1 && x.commentId != "") {
              comments.push(x);
            }
          }
          setComments((arr) => [...arr, `${arr.length}`]);
          comments.length = 0;
        }); // fetching latest blog
    } catch (err) {
      alert(err); // Failed to fetch
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="commentPageContainer">
        <div className="commentPageImage">
          <img
            src={blogData.imgLink}
            alt="Company Logo"
            width="70%"
            height="200px"
          />
        </div>

        <div className="commentPageMiddle">
          <div>
            <div className="commentPageTitle">{blogData.title}</div>
            <div>
              <p className="CommentPageGeneral">
                {blogData.date} | by {blogData.author} | in {blogData.company}{" "}
                Blog
              </p>
            </div>
            <div className="CommentPageAbstract">{blogData.blogAbstract}</div>
            <div className="CommentPageLink">
              <a href={blogData.link}>
                Read more on {blogData.company} blog [Click here]
              </a>
            </div>
          </div>
          <hr />
          <div>
            <span className="commentHeading">Comments</span>
            <div>
              {comments.slice(0, 3).map((e) => (
                <div className="commentContainer">
                  <div className="CommentPageUsername">{e.userName} </div>
                  <div className="CommentPageComment">-{e.comment}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="commentPageDetails statsContainer">
          <div>
            <span>
              <i class="fa fa-thumbs-up" aria-hidden="true"></i>{" "}
            </span>{" "}
            {blogData.likes}
          </div>
          <br></br>
          <div>
            <span>
              <i class="fa fa-comment-o" aria-hidden="true"></i>{" "}
            </span>
            {blogData.comments}
          </div>
          <br></br>
          <div>
            <span>
              <i class="fa fa-book" aria-hidden="true"></i>{" "}
            </span>
            Blog
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentPage;
