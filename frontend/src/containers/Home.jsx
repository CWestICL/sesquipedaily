import React from "react";
import { Link } from "react-router-dom";

const home = () => (
    <div className="container">
        <div className="mt-5 p-5 bg-light">
            <h1 className="display-4 merriweather text-center">Ses · quip · e · Daily</h1>
            <p className="lead mt-3">Welcome to SesquipeDaily, the daily anagram finding game. Each day a new set of 16 letters are given, try and find the longest word you can and submit it to the leaderboard.</p>
            <hr className="my-4" />
            <p>Click the button to log in.</p>
            <Link className="btn btn-primary btn-lg" to="/login">Login</Link>
        </div>
    </div>
);

export default home;