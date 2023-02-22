import React, { Component } from "react";

import DailyPuzzle from "./DailyPuzzle";
import LeaderBoard from "./LeaderBoard";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<p>This is the home page!</p>} />

                    <Route path="/daily" element={<DailyPuzzle />} />
                    <Route path="/leaderboard" element={<LeaderBoard />} />
                </Routes>
            </Router>
        );
    }
}