import React from "react"
import {useState, useEffect, useRef} from "react"

export const Counter = () => {
  const [count , setCount] = useState(0);

  // Use useRef for mutating variables we want to persist
  // without  triggering rerender on their change

  const requestRef = useRef();
  const previousTimeRef = useRef();

  // Request Animation Frame (what handles time updates)
  const animate = time => {
    if (previousTimeRef.current != undefined){
      const deltaTime = time - previousTimeRef.current;

      // Pass a function to the setter of the state
      // so we always have latest state
      setCount(prevCount => (prevCount + deltaTime * 0.001) % 100)
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }

  // Initialization
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []) // run once
  return (
    <div className="counter">
      {Math.round(count)}
    </div>
  );
}

