import React, {useState, useEffect} from 'react';
import Timer from "./Components/Timer";


function App() {

    const [words] = useState([
        'sigh', 'tense', 'airplane', 'ball', 'pies', 'juice', 'warlike', 'bad', 'north', 'dependent',
        'steer', 'silver', 'highfalutin', 'superficial', 'quince', 'eight', 'feeble', 'admit',
        'drag', 'loving'
    ])

    const [score, setScore] = useState(0)


    function gameOver() {
        console.log('game over')
    }

    return (
        <div>
            <h2><span role="img" aria-label="typing">👩‍💻 </span> Speed Typer <span role="img" aria-label="typing">👨‍💻</span></h2>
            <div className="flex justify-between">
                <Timer gameOver={gameOver}/>
                <div>
                    Score: {score}
                </div>
            </div>
        </div>
    );
}

export default App;
