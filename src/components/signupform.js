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
            "email": email,
            "userName": username,
            "password": password,
            "passwordRepeat": confpass
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        };
        try{
            
            
            fetch('http://localhost:8080/user/register', requestOptions)
            .then(async response => {
                
                const data = await response.json();
                
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    alert(response)
                }
                else
                    alert(response)

            })
        }
        catch (err) {
            alert(err); // Failed to fetch
          }
    };

    return (
        <div className="app">
            <form onSubmit={onSubmitSignup}>    
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
                <input type="submit" />
            </form>

        </div>
    );
}

export default App;
