import { FaRegThumbsUp } from "react-icons/fa";

const blogStats = (e) => {
    return (
        <div className="statsContainer">
            <div className="like-container">
                <span className="likeIcon">
                    <FaRegThumbsUp />
                </span>{" "}
                {e.stats.likes}
            </div>
            <br></br>
            <div>
                <span>
                    <i className="fa fa-comment-o" aria-hidden="true"></i>{" "}
                </span>
                {e.stats.comments}
            </div>
            <br></br>
            <div>
                <span>
                    <i className="fa fa-book" aria-hidden="true"></i>{" "}
                </span>
                Blog
            </div>
        </div>
    );
  };
  
  export default blogStats;
  