import { Link } from "react-router-dom";

const blogContent = (e) => {
  return (
    <div>
      <div className="content-heading">
        {/* <Link
          to={{
            pathname: "/comment",
            aboutProps: {
              data: e.content.content,
            },
          }}
        >
          <p>{e.content.title}</p>
        </Link> */}
        <div
        /* to={{
            pathname: "/comment",
            aboutProps: {
              data: e.content.content,
            },
          }} */
        >
          <a href={e.content.link} target="_blank">
            <p>{e.content.title}</p>
          </a>
        </div>
      </div>

      <div className="content-time">
        <p>
          {e.content.date} | by {e.content.author} | in {e.content.company} Blog
        </p>
      </div>
      <div className="content-description">
        <p>
          {e.content.blogAbstract}
          <br />
          <a href={e.content.link} target="_blank">
            {" "}
            [Read more...]
          </a>
        </p>
      </div>
    </div>
  );
};

export default blogContent;
