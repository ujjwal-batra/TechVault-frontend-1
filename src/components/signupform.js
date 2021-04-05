import React, { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confpass, setconfpass] = React.useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const onChangeConfPass = (e) => {
    setconfpass(e.target.value);
    console.log(e.target.value);
  };

  const onSubmitSignup = () => {
    const details = {
      email: email,
      userName: username,
      password: password,
      passwordRepeat: confpass,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(details),
    };
    try {
      fetch("http://localhost:8080/user/register", requestOptions).then(
        async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            console.log(error);
          } else alert(response);
        }
      );
    } catch (err) {
      alert(err); // Failed to fetch
    }
  };

  return (
    <div className="containerForm">
      <div className="headingSignup">
        <span>
          <img
            src="https://img.icons8.com/ios/452/edit-user-male.png"
            alt="User Logo"
            width="100px"
            height="100px"
          />
        </span>
        <span className="headingSignupText">
          <div>Sign up</div>
          <div>Welcome to TechVault</div>
        </span>
      </div>
      <div method="POST" className="signupForm">
        <input
          class=""
          type="text"
          name="username"
          placeholder="Username..."
          onChange={onChangeUsername}
        />
        <input
          class=""
          type="email"
          name="email"
          placeholder="Email..."
          onChange={onChangeEmail}
        />
        <input
          class=""
          type="text"
          name="password"
          placeholder="Password..."
          onChange={onChangePassword}
        />
        <input
          class=""
          type="text"
          name="confirmpass"
          placeholder="Confirm password..."
          onChange={onChangeConfPass}
        />
        <div className="submitSignup">
          <input
            className="submitSignupInput"
            type="submit"
            onClick={onSubmitSignup}
          />
        </div>
        <div>
          Already have an account? <a href="./login">Log In</a>
        </div>
      </div>
    </div>
  );
}

export default App;
