import React, { useState } from "react";

export default {
  title: "useStateBase",
}


function generateData() {
  return 10.700
}


export const useStateBase = () => {
  console.log("useState")

  const [counter, setCounter] = useState(generateData) //вызовет функцию! 1 раз, без обновления, работает по типу useMemo

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    {counter}
  </>
}