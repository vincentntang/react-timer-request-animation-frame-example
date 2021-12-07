import React, {useEffect, useState, useRef} from "react"

// a simplified version of https://stackoverflow.com/a/67858834/3258462
export const BasicCounter = () => {
  // const [count , setCount] = useState(0);
  const INITIAL_COUNT = 61;

  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [isCountdownRunning, setIsCountdownRunning] = useState(true);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  useInterval(
    () => {
      if(secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setIsCountdownRunning(false);
      }
    },
    isCountdownRunning ? 1000: null,
  )

  return (
    <div className="basic-counter">
      {minutesToDisplay}:{twoDigits(secondsToDisplay)}
      <hr/>
      Countdown Status:
      {isCountdownRunning ? "Counting Down" : "Not Counting Down"}
    </div>
  );
}

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Setup the interval
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    if(delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id);
    }
  }, [delay])
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, '0');