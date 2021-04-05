import React, { useState, useEffect } from "react";

function App() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        console.log(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    };

    const onSubmitSignup = () => {
        const details = {
            "userName": username,
            "password": password,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(details)
        };
        try{
            
            
            fetch('', requestOptions)
            .then(async response => {
                
                const data = await response.json();
                
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    console.log(error);
                }
                else
                    alert("Logged in")

            })
        }
        catch (err) {
            console.log(err); // Failed to fetch
          }
    };

    return (
        <div className="containerForm">
            <div className="headingSignup">
                <span>
                    <img src="https://img.icons8.com/ios/452/edit-user-male.png" width="100px" height="100px"/>
                </span>
                <span className="headingSignupText">
                    <div>Login</div>
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
                    type="text"
                    name="password"
                    placeholder="Password..."
                    onChange={onChangePassword}
                />
                <div>
                    Forgot password?
                </div>
                <div className="submitSignup">
                    <input className="submitSignupInput" type="submit" onClick={onSubmitSignup}  />
                </div>
                <div>
                    Don't have an accout? <a href="#">Sign up</a>
                </div>
            </div>

        </div>
    );
}

export default App;
