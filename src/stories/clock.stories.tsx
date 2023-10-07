import React, { useState, useEffect } from "react";


export default {
  title: "Clock",
}


export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("useEffect")
    const timeoutId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearTimeout(timeoutId);
  }, []);


  const addedZero = (n: number) => {
    return n > 10 ? n.toString().padStart(2, "0") : n
  }

  return (
    <button>
      <span>{addedZero(new Date().getHours())}:</span>
      <span>{addedZero(new Date().getMinutes())}:</span>
      <span>{addedZero(new Date().getSeconds())}</span>
    </button>
  );
}
