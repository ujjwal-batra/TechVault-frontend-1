import React, { useState, useEffect } from 'react' 
import ReactDOM from 'react-dom'

const RightTags = () => {

    const [topic, setTopic] = React.useState([]);
    const [topics, setTopics] = React.useState([]);
    const [company, setCompany] = React.useState([]);
    const [companies, setCompanies] = React.useState([]);

    React.useEffect(() => {
        try {
            fetch('http://localhost:8080/home/keywordsCount')
                .then(results => results.json())
                .then(data => {
                    for(var i=1; i<6; i++){
                        var x = {
                            "keyword": data[i].keyword,
                            "frequency": data[i].frequency
                        }
                        if(topic.indexOf(x) == -1){
                            topic.push(x);
                        }
                    }
                    setTopics(topic);
                }
            ); // fetching latest blogs 
        } catch(err) {
            alert(err); // Failed to fetch
        }
    }, []); 
    React.useEffect(() =>{
      try {
            fetch('http://localhost:8080/home/blogsCount')
                .then(results => results.json())
                .then(data => {
                    for(var i=0; i<data.length; i++){
                        var x = {
                            "company": data[i].company,
                            "count": data[i].count
                        }
                        console.log(data[i].company)
                        if(company.indexOf(x) == -1 && x.company != null && x.count != null){
                            company.push(x);
                        }
                    }
                    setCompanies(company);
                }
            ); // fetching latest blogs 
        } catch(err) {
            alert(err); // Failed to fetch
        }
    }, []);

    return(
        <div>
          <div className="tagsContainer">
              <div className="tags-heading">
                  <h3><span>▼</span> Topics</h3>
              </div>
              <div className="tags-values">
                  {
                      topics.map( e => 
                          <div style={{background: `#F4E8C8`}}>
                              {e.keyword} <span>({e.frequency})</span>
                          </div>
                      )
                  }
              </div>
              <div className="tag-showmore">
                  <h6><span>Show More</span></h6>
              </div>
          </div>

          <div className="tagsContainer">
              <div className="tags-heading">
                  <h3><span>▼</span> Company</h3>
              </div>
              <div className="tags-values">
                  {
                      company.map( e => 
                          <div style={{background: `#F4E8C8`}}>
                              {e.keyword}<span>({e.frequency})</span>
                          </div>
                      )
                  }
              </div>
              <div className="tag-showmore">
                  <h6><span>Show More</span></h6>
              </div>
          </div>
          
        </div>
    )
}

export default RightTags;