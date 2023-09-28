import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            username: username,
            password: password
        };

        fetch("https://my-flix-app-66e818e7b7de.herokuapp.com/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Login response: ", data);
                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("token", data.token);
                    onLoggedIn(data.user, data.token);
                } else {
                    alert("Login failed");
                }
            })
            .catch((e) => {
                alert("Something went wrong");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    minLength="7"
                    required
                />
            </label>
            <label>
                Password:
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="7"
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};



//username: 167OLdP5BUfLZGxP
//password: K39eKYhPMV9DDWhJ