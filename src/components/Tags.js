const RightTags = () => {

    const data = [
      {
        name: "Topics",
        color: "#ffcd7d",
        tags: [
          {
            name: "Machine Learning",
            stats: 201,
          },
          {
            name: "AI",
            stats: 221,
          },
          {
            name: "Deep Learning",
            stats: 21,
          },
          {
            name: "Cloud",
            stats: 1811,
          },
          {
            name: "CI/CD",
            stats: 221,
          },
          {
            name: "Parallel Computing",
            stats: 11,
          },
        ],
      },
      {
        name: "Companies",
        color: "#77fcdb",
        tags: [
          {
            name: "Google",
            stats: 2356,
          },
          {
            name: "Uber",
            stats: 356,
          },
          {
            name: "Facebook",
            stats: 156,
          },
          {
            name: "Nuro",
            stats: 76,
          },
          {
            name: "Tesla",
            stats: 896,
          },
          {
            name: "AnyScale",
            stats: 6,
          },
          {
            name: "Match",
            stats: 68,
          },
          {
            name: "Github",
            stats: 256,
          },
        ],
      },
      {
        name: "Conferences",
        color: "#a0d964",
        tags: [
          {
            name: "ICML",
            stats: 1256,
          },
          {
            name: "CVPR",
            stats: 956,
          },
          {
            name: "AAAI",
            stats: 956,
          },
          {
            name: "ApacheCon",
            stats: 156,
          },
          {
            name: "Microsoft Ignite",
            stats: 1256,
          },
          {
            name: "Flink Forward",
            stats: 286,
          },
        ],
      },
    ];

    return(
        <>
            {
                data.map((value,idx) => (
                    <div key={idx} className="tagsContainer">
                        <div className="tags-heading">
                            <h3><span>▼</span> {value.name}</h3>
                        </div>
                        <div className="tags-values">
                            {
                                value.tags.map((tag,idx) => (
                                    <div key={idx} style={{background: `${value.color}`}}>
                                        {tag.name} <span>({tag.stats})</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="tag-showmore">
                            <h6><span>Show More</span></h6>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default RightTags;