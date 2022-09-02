import React from 'react'

const Trivia = ({ handleanswer, showans, nextque, curidx, score, data: { question, correct_answer, answers } }) => {
    return (
        <div>
            <p>Welcome to the Trivia game app total 20 questions are there , Good Luck!</p>
            <h3>Score : {score}</h3>
            <div className="questionClass">
                <h3>{curidx + 1} :- {question}</h3>
            </div>
            {answers.map((answer, idx) => {
                const specialClassName = showans ? (
                    answer === correct_answer ? "green-btn" : "red-btn"
                ) : "";
                return (
                    <button key={idx} className={`normal-btn ${specialClassName}`}
                        onClick={() => handleanswer(answer)}
                    >{answer}</button>

                )
            })}
            <div>
                {showans && (
                    <><button onClick={nextque} className="next-question">Next Question</button></>
                )}
            </div>
        </div>
    )
}

export default Trivia;
