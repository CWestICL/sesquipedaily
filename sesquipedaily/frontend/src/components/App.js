import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import DailyPuzzle from "./DailyPuzzle";
import LeaderBoard from "./LeaderBoard";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HomePage />
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);