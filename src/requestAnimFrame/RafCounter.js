import React from "react"
import {useState, useEffect, useRef} from "react"
import {useRafCounter} from "./useRafCounter";

export const Counter = () => {
  // const [count , setCount] = useState(0);
  const [count, setCount] = React.useState(0)

  // Custom Hook
  useRafCounter(deltaTime => {
    setCount(prevCount => (prevCount + deltaTime * 0.001) % 100)
  })
  
  return (
    <div className="counter">
      {Math.round(count)}
    </div>
  );
}

