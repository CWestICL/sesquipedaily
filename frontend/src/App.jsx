import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'

import Layout from "./hocs/Layout"

import Home from "./containers/Home"
import Register from "./containers/Register"
import Login from "./containers/Login"
import Dashboard from "./containers/Dashboard"

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

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

const App = () => (
  <Router>
    <Layout>
      <Route path="/" element={<p>Home</p>} />
      <Route path="/register" element={<p>Register</p>} />
      <Route path="/login" element={<p>Login</p>} />
      <Route path="/dashboard" element={<p>Dashboard</p>} />
    </Layout>
  </Router>
);

*/

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Route>
    </Routes>
  </Router>
);

export default App
