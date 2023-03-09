import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./hocs/Layout"

import Home from "./containers/Home"
import Register from "./containers/Register"
import Login from "./containers/Login"
import Dashboard from "./containers/Dashboard"

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

export default App;