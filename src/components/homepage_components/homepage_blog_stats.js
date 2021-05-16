import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogStats = (e) => {
  const type = e.stats.type.charAt(0).toUpperCase() + e.stats.type.slice(1);
  return (
    <div className="statsContainer">
      {/* <div className="like-container">
        <span className="likeIcon">
          <FaRegThumbsUp />
        </span>{" "}
        {e.stats.likes}
      </div> */}
      {/* <br></br>
      <div>
        <span>
          <i className="fa fa-comment-o" aria-hidden="true"></i>{" "}
        </span>
        {e.stats.comments}
      </div>
      <br></br> */}
      <br></br>
      <div>
        <span>
          <i className="fa fa-book" aria-hidden="true"></i>{" "}
        </span>
        {type}
      </div>
      <br></br>
      <div>
        <a href={e.stats.link} style={{ color: "#fff" }}>
          <span>
            <i className="fa fa-link" aria-hidden="false"></i>{" "}
          </span>
          Link
        </a>
      </div>
    </div>
  );
};

export default blogStats;
