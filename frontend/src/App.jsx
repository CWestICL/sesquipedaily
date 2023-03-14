import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'

import Layout from "./hocs/Layout"

import Home from "./containers/Home"
import Register from "./containers/Register"
import Login from "./containers/Login"
import Dashboard from "./containers/Dashboard"
import Daily from "./containers/Daily"
import Leaderboard from "./containers/Leaderboard"

import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/leaderboard">
            <Route path="" element={<p>Choose a board</p>} />
            <Route path=":id" element={<Leaderboard />} />
          </Route>
          <Route path="*" element={<p>Page not found</p>} />
        </Route>
      </Routes>
    </Router>
  </Provider>

);

export default App
