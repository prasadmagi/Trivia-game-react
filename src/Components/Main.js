import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Trivia from './Trivia'
export const Main = () => {
    const [show, setshow] = useState([]);
    const [curidx, setcuridx] = useState(0);
    const [showans, setshowans] = useState(false);
    const [score, setScore] = useState(0);
    useEffect(() => {
        const url = "https://opentdb.com/api.php?amount=20";
        axios.get(url)
            .then(res => res.data)
            .then(data => {
                const show = data.results.map((question) => ({
                    ...question,
                    answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
                }))
                setshow(show)
            });
    }, [])


    const handleanswer = (ans) => {
        if (!showans) {
            if (ans === show[curidx].correct_answer) {
                alert("Correct Answer");
                setScore(score+1)
            }
        } 

        setshowans(true);
    }

    const nextque = () => {
        setcuridx(curidx + 1);
        setshowans(false);
    }
    


    return (show.length > 0 ? (

        <div className="container">
            {curidx >= show.length ? (
                <h1>Game Ended, Your Score is {score} </h1>) : (<Trivia handleanswer={handleanswer}
                    showans={showans}
                    nextque={nextque}
                    data={show[curidx]}
                    curidx ={curidx} 
                    score = {score}
                    />)
                    
            }
        </div>

    ) : <div className="container">Loading... Please Wait!</div>

    );
}
