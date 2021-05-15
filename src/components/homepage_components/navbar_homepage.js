import React from "react";

const Header = ({ setSelectedNav }) => {
  const [latest, setLatest] = React.useState("fa fa-check");
  const [liked, setLiked] = React.useState();
  const [viewed, setViewed] = React.useState();

  // selction of nav button
  const onClickNav = (e) => {
    setSelectedNav(e);
    if (e === "latest") {
      setLatest("fa fa-check");
      setLiked("");
      setViewed("");
    }
    if (e === "liked") {
      setLiked("fa fa-check");
      setLatest("");
      setViewed("");
    }
    if (e === "viewed") {
      setViewed("fa fa-check");
      setLiked("");
      setLatest("");
    }
  };

  return (
    <div>
      <nav>
        <div className="navLinks">
          <button
            className={latest}
            onClick={() => onClickNav("latest")}
            style={{ cursor: `pointer` }}
          >
            &nbsp;Latest
          </button>
          <button
            className={liked}
            onClick={() => onClickNav("liked")}
            style={{ cursor: `pointer` }}
          >
            &nbsp;Top Liked
          </button>
          {/* <button
            className={viewed}
            onClick={() => onClickNav("viewed")}
            style={{ cursor: `pointer` }}
          >
            &nbsp; Top Viewed
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
