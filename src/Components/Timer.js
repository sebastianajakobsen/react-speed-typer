import React, {useEffect, useState} from 'react';

function Timer({gameOver}) {


    const [timeLeft, setTimeLeft] = useState( 10)

    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) {
            gameOver();
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
    }, [timeLeft, gameOver]);

    return (

            <div>
                Time left: {timeLeft}
            </div>

    );
}

export default Timer;