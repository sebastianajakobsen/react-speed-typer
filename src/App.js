import React, {useState} from 'react';
import Timer from "./Components/Timer";
import Score from "./Components/Score";


function App() {
    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState( 10)
    const [words] = useState([
        'sigh', 'tense', 'airplane', 'ball', 'pies', 'juice', 'warlike', 'bad', 'north', 'dependent',
        'steer', 'silver', 'highfalutin', 'superficial', 'quince', 'eight', 'feeble', 'admit',
        'drag', 'loving'
    ])


    function gameOver() {
        console.log('game over')
    }


    return (
        <div>
            <h2><span role="img" aria-label="typing">👩‍💻 </span> Speed Typer <span role="img" aria-label="typing">👨‍💻</span></h2>
            <div className="flex justify-between">
                <Timer setTimeLeft={setTimeLeft} timeLeft={timeLeft} gameOver={gameOver}/>
                <Score score={score}/>
            </div>
        </div>
    );
}

export default App;
