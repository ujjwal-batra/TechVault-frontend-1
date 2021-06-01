import React from "react";
import { useEffect, useLocation } from "react-router-dom";
import Header from "../components/header";

function CommentPage() {
  const [comments, setComments] = React.useState([]);

  const props = useLocation();
  const blogData = props.aboutProps.data;

  React.useEffect(() => {
    try {
      let link = "/:8080/comment/987";
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
            if (comments.indexOf(x) === -1 && x.commentId !== "") {
              comments.push(x);
            }
          }
          setComments((arr) => [...arr, `${arr.length}`]);
          comments.length = 0;
        }); // fetching latest blog
    } catch (err) {
      alert(err); // Failed to fetch
    }
  }, [comments]);

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

        {/*  <div className="commentPageDetails statsContainer">
          <div>
            <span>
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>{" "}
            </span>{" "}
            {blogData.likes}
          </div>
          <br></br>
          <div>
            <span>
              <i className="fa fa-comment-o" aria-hidden="true"></i>{" "}
            </span>
            {blogData.comments}
          </div>
          <br></br>
          <div>
            <span>
              <i className="fa fa-book" aria-hidden="true"></i>{" "}
            </span>
            Blog
          </div>
        </div> */}
      </div>
      <div className="footer">
        <div className="footer-contact">
          <span className="footer-contact-item">Contact us on:</span>
          <a className="footer-contact-item" href="mailto:admin@techvault.com">
            <span className=" icon-wrapper icon-ion" data-name="mail">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56zm-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26z"></path>
              </svg>
            </span>{" "}
            admin@techvault.com
          </a>
          .
          <span className="footer-contact-item">
            {" "}
            TechVault is a (Description Here)
          </span>
        </div>

        <div className="footer-links">
          <a href="/site/terms">Terms | </a>
          <a href="/site/privacy">Privacy | </a>
          <a href="/site/cookies-policy">Cookies policy</a>
        </div>
      </div>
    </div>
  );
}

export default CommentPage;
