const blogImage = (e) => {
    const onClickDeselct = (tag) => {
        const temp = e.dataPassed;
        if(temp.length == 1){
            e.setSelectedTopics([]);
            e.setPassedTopic([]);
            return;
        }
        for( var i = 0; i < temp.length; i++){ 
            if ( temp[i] === tag.tags) { 
                console.log(tag.tags)
                temp.splice(i, 1); 
            }
        }
        console.log(temp);
        e.setPassedTopic([]);
        e.setSelectedTopics(temp);
        e.setPassedTopic(temp);
        
    };
    if (e.dataPassed.length == 0 ) return null;
    return (
        <div className="selected-tags-container">
            {e.dataPassed.map((tags) => (
                <div className="selected-tag-value" style={{ background: `#6C63FF`, color: `white`, cursor: `pointer` }}>
                    {tags}{" "}
                    <span style={{ padding: `5px` }} onClick={() => onClickDeselct({ tags })}>
                    &#10007;
                    </span>
                </div>
            ))}
        </div>
    );
  };
  
  export default blogImage;
  