import { Link } from "react-router-dom";

const header = () => {
  return (
    <div>
      <header className="headerContainer">
        {/* Company name */}
        <div className="heading">
          <span>
            <Link className="techvault" to="/">
              TechVault
            </Link>
          </span>
        </div>
          {/* Login Signup */}
        <div className="headerLinks">  
          <span className="loginButtonHeader">
            <span>
              <Link className="loginButton" to="/login">
                LogIn
              </Link>
            </span>
            <span>
              <Link className="loginButton" to="/signup">
                /Register
              </Link>
            </span>
          </span>
        </div>
      </header>
    </div>
  );
};

export default header;
