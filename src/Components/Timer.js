import React, {useEffect} from 'react';

function Timer({gameOver, setGameOver, timeLeft, setTimeLeft}) {

    useEffect(() => {

        if(gameOver) {
            return
        }

        // exit early when we reach 0
        if (!timeLeft) {
           setGameOver(true)
        }

        // save intervalId to clear the interval when the
        // component re-renders
        const timeInterval = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(timeInterval);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft, setTimeLeft, setGameOver, gameOver]);

    return (

            <div>
                Time left: {timeLeft}
            </div>

    );
}

export default Timer;