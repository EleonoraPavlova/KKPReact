import React, { useState } from "react";
//ПРИМЕР КАК ИСПОЛЬЗОВАТЬ useMemo без useMemo!

export default {
  title: "useStateBase",
}


function generateData() {
  console.log("generateData")
  return 10.700
}


export const useStateBase = () => {
  console.log("useState")
  const [counter, setCounter] = useState(generateData) //вызовет функцию! 1 раз, без обновления, работает по типу useMemo

  const changer = (prev: number) => {
    return prev + 1
  }

  return <>
    {/* <button onClick={() => setCounter(changer)}>+</button> */}
    {/* или так записать: */}
    <button onClick={() => setCounter(prev => prev + 1)}>+</button>
    {counter}
  </>
}