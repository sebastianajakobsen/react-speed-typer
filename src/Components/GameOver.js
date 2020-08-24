import React from 'react';

function GameOver({score, resetGame}) {

    function handleButtonClick() {
        resetGame();
    }

    return (
        <div>
            <h1>Time ran out</h1>
            <p>Your final score is {score}</p>
            <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Try again</button>
        </div>
    );
}

export default GameOver;