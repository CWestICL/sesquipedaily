import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import api from "../actions/api"
import WordModal from "../components/WordModal";

const daily = () => {

    const [puzzle, setPuzzle] = useState("");
    const [puzzleID, setPuzzleID] = useState("");
    const [puzzleSolutions, setPuzzleSolutions] = useState([]);
    const [redirect, setRedirect] = useState("");

    const [answer, setAnswer] = useState("");
    const [message, setMessage] = useState("Loading...");

    async function fetchPuzzle() {
        try {
            const res = await api.get("api/puzzles/daily");
            console.log(res.data);
            setPuzzle(res.data.puzzle);
            setPuzzleID(res.data.id);
            setPuzzleSolutions(res.data.solutions);
            setAnswer("");
            setMessage("");

            const grid = document.getElementById("button-grid");
            grid.removeAttribute("hidden");
        }
        catch (err) {
            console.log("Oh no an error! ", err);
        }
    }

    async function postAnswer() {
        try {
            const body = {
                answer: answer,
                puzzle_id: puzzleID
            }
            const res = await api.post("/api/answers", body);
            console.log(res);
            const url = `/leaderboard/${puzzleID}`
            setRedirect(<Navigate to={url} />)
        }
        catch (err) {
            console.log("Oh no an error! ", err);
        }
    }

    const letterButtonClick = (e) => {
        console.log(e.target.innerHTML);
        e.target.classList.add("disabled");
        setAnswer(answer + e.target.innerHTML);
    }

    function resetClick() {
        const buttons = document.querySelectorAll(".btn-primary");
        buttons.forEach((button) => {
            button.classList.remove("disabled");
        });
        setAnswer("");
    }

    function submitClick() {
        console.log(puzzleSolutions);
        if (puzzleSolutions.includes(answer)) {
            console.log("Word found");
            postAnswer();
        }
        else {
            console.log("Word not found");
            resetClick();
            alert("Sorry! That word isn't in our word list")
        }
    }

    useEffect(() => {
        console.log("useEffect triggered");
        fetchPuzzle();
    }, []);

    return (
        <div className="container">
            <div className="mt-5 p-5 bg-light text-center justify-content-center merriweather answer-display">
                <h1 className="display-4">{message}</h1>
                <h1 className="display-4">{answer}</h1>
                <div>
                    {redirect}
                </div>
            </div>
            <div id="button-grid" className="container mt-3" hidden>
                <div className="row justify-content-center button-grid-row">
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[0]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[1]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[2]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[3]}</button>
                    </div>
                </div>
                <div className="row justify-content-center button-grid-row">
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[4]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[5]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[6]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[7]}</button>
                    </div>
                </div>
                <div className="row justify-content-center button-grid-row">
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[8]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[9]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[10]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[11]}</button>
                    </div>
                </div>
                <div className="row justify-content-center button-grid-row">
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[12]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[13]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[14]}</button>
                    </div>
                    <div className="col-sm text-center m-1">
                        <button className="btn btn-primary w-100 h-100 grid-button" onClick={(e) => letterButtonClick(e)}>{puzzle[15]}</button>
                    </div>
                </div>
                <div className="row justify-content-center button-grid-row mt-3">
                    <div className="col-md text-center m-1">
                        <button className="btn btn-secondary w-100" onClick={resetClick}>Reset</button>
                    </div>
                    <div className="col-md text-center m-1">
                        <button className="btn btn-secondary w-100" onClick={submitClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default daily;