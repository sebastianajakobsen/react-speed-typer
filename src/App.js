import React, {useState, useEffect} from 'react';
import Timer from "./Components/Timer";


function App() {

    const [words] = useState([
        'sigh', 'tense', 'airplane', 'ball', 'pies', 'juice', 'warlike', 'bad', 'north', 'dependent',
        'steer', 'silver', 'highfalutin', 'superficial', 'quince', 'eight', 'feeble', 'admit',
        'drag', 'loving'
    ])

    const [timeLeft, setTimeLeft] = useState( 10)
    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) {
           return gameOver();
        }

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);


    function gameOver() {
      console.log('game over')
    }

    return (
        <div>
            <Timer timeLeft={timeLeft}/>
        </div>
    );
}

export default App;
