const blogImage = (e) => {
    const onClickTopic = (tag) => {
        e.setSelectedTopics((arr) => [...arr, tag]);
        e.setPassedTopic((arr) => [...arr, tag]);
    };
    if(e.type == "company"){
        return (
            <div className="tags-values">
                {e.dataPassed.slice(0, e.topicVisible).map((tags) => (
                    <div
                    className="tags-Values-style"
                    onClick={() => onClickTopic(tags.company)}
                    >
                    {tags.company} <span className="tags-counts">{tags.count}</span>
                    </div>
                ))}
            </div>
        );
    }
    else{
        return (
            <div className="tags-values">
                {e.dataPassed.slice(0, e.topicVisible).map((tags) => (
                    <div
                    className="tags-Values-style"
                    onClick={() => onClickTopic(tags.keyword)}
                    >
                    {tags.keyword} <span className="tags-counts">{tags.frequency}</span>
                    </div>
                ))}
            </div>
        );
    }
  };
  
  export default blogImage;
  