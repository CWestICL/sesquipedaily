import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import api from "../actions/api";

const leaderboard = () => {
    const { id } = useParams();

    const [puzzle, setPuzzle] = useState("");
    const [puzzleDate, setPuzzleDate] = useState("Loading...");
    const [puzzleID, setPuzzleID] = useState("");
    const [answers, setAnswers] = useState([]);

    async function fetchPuzzle() {
        try {
            const res = await api.get(`api/puzzles/${id}`);
            setPuzzle(res.data.puzzle.split("").join(" · "));
            setPuzzleDate(res.data.day.split("-").reverse().join("/"));
            setPuzzleID(res.data.id);
            setAnswers(res.data.answer_set.sort((a, b) => b.score - a.score));

            console.log(res.data);
        }
        catch (err) {
            console.log("Oh no an error! ", err);
        }
    }

    useEffect(() => {
        console.log("useEffect triggered");
        fetchPuzzle();
    }, []);

    return (
        <div className="container">
            <div className="mt-5 p-5 bg-light">
                <h1 className="display-4 merriweather text-center mt-3">{puzzleDate}</h1>
                <h1 className="display-6 merriweather text-center">{puzzle}</h1>
                <div className="row">
                    <div className="col-sm text-center m-1">
                        <div className="mt-1 p-1 bg-dark leaderboard-cell">
                            Username
                        </div>
                    </div>
                    <div className="col-sm text-center m-1">
                        <div className="mt-1 p-1 bg-dark leaderboard-cell">
                            Answer
                        </div>
                    </div>
                    <div className="col-sm text-center m-1">
                        <div className="mt-1 p-1 bg-dark leaderboard-cell">
                            Score
                        </div>
                    </div>
                </div>
                {answers.map(item => (
                    <div className="row">
                        <div className="col-sm text-center m-1">
                            <div className="mt-1 p-1 bg-primary leaderboard-cell">
                                {item.user.username}
                            </div>
                        </div>
                        <div className="col-sm text-center m-1">
                            <div className="mt-1 p-1 bg-primary leaderboard-cell">
                                {item.answer}
                            </div>
                        </div>
                        <div className="col-sm text-center m-1">
                            <div className="mt-1 p-1 bg-primary leaderboard-cell">
                                {item.score}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default leaderboard