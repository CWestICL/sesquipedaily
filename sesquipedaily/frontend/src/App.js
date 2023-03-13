import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";

import Layout from "./hocs/Layout"

import Home from "./containers/Home"
import Register from "./containers/Register"
import Login from "./containers/Login"
import Dashboard from "./containers/Dashboard"

/*
const App = () => (
    <Router>
        <Layout>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Layout>
    </Router>
);

function App() {

    const [users, setUsers] = useState("");

    Axios.get("http://127.0.0.1:8000/accounts/users").then(
        (response) => {
            setUsers(response.data);
        }
    );

    return (
        <div>{users}</div>
    );
}

*/

const App = () => {
    const [users, setUsers] = useState("");

    async function fetchUsers() {
        try {
            //const response = await Axios.get("http://127.0.0.1:8000/accounts/users");
            const response = await fetch("/accounts/users");
            const usersData = await response.json();
            setUsers(JSON.stringify(usersData));
        } catch (err) {
            console.log("Oh no an error! ", err)
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <main>
            <h1>Users:</h1>
            <p>{users}</p>
        </main>
    )
};


export default App;