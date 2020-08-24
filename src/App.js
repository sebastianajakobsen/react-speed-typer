import React, {useState} from 'react';
import Timer from "./Components/Timer";
import TypingForm from "./Components/TypingForm";
import GameOver from "./Components/GameOver";


function App() {
    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(10)
    const [newWord, setNewWord] = useState(true)
    const [gameOver, setGameOver] = useState(false)

    const [words] = useState([
        'sigh', 'tense', 'airplane', 'ball', 'pies', 'juice', 'warlike', 'bad', 'north', 'dependent',
        'steer', 'silver', 'highfalutin', 'superficial', 'quince', 'eight', 'feeble', 'admit',
        'drag', 'loving'
    ])


    function updateScoreAndWord() {
        setScore(score + 1);
        setNewWord(true);
        setTimeLeft(timeLeft + 3);
    }

    function resetGame() {
        setScore(0);
        setNewWord(true);
        setTimeLeft(+ 10);
        setGameOver(false);
    }


    return (
        <div className="rounded-t-lg overflow-hidden border-t border-l border-r  px-3 py-10 flex justify-center">
            <div className="w-full max-w-md bg-blue-700 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-white">
                <h2 className="text-center text-2xl font-bold p-3 bg-blue-900 rounded">
                    <span role="img" aria-label="typing">👩‍💻</span>
                    <span className="mx-3">Speed Typer</span>
                    <span role="img" aria-label="typing">👨‍💻</span>
                </h2>


                {!gameOver ?
                    <>
                    <div className="flex justify-between my-2 text-lg">
                        <Timer setTimeLeft={setTimeLeft} timeLeft={timeLeft} gameOver={gameOver} setGameOver={setGameOver}/>
                        <div>{score}</div>
                    </div>

                    <div>
                        <TypingForm words={words} updateScoreAndWord={updateScoreAndWord} newWord={newWord}
                                    setNewWord={setNewWord} gameOver={gameOver}/>
                    </div>
                    </>
                    :
                    <GameOver resetGame={resetGame} score={score}/>
                }

            </div>
        </div>
    );
}

export default App;
