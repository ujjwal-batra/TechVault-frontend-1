import {Link} from 'react-router-dom';

const header = () => {
  return (
    <div>
      <header className="headerContainer">
        <div className="heading">
          <span><Link className="techvault" to="/">TechVault</Link></span>
        </div>
        <div className="headerLinks">
          <a href="#">Contact Us</a>
          <div> 
            <span>
              <Link to="/login">
                  Log In
              </Link> 
            </span>
            <span>
              <Link to="/signup">
                /Register
              </Link> 
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default header;
