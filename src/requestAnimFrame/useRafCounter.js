import React from "react"
import {useState, useEffect, useRef} from "react"

export const useRafCounter = callback => {

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
      callback(deltaTime);
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }

  // Initialization
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []) // run once
} 