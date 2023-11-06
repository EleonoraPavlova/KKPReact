import React, { useEffect, useState } from "react";

export default {
  title: "UseEffect",
}


export const UseEffectBase = () => {
  console.log("UseEffectBase")
  const [counter, setCounter] = useState(1) //вызовет функцию! 1 раз, без обновления, работает по типу useMemo

  //api, document.getElementById - это все side effects
  //setInterval, document.title="hbfhfd"
  //indexedDB - раюота с локальн базой данных
  useEffect(() => { //срабатывает после того, как разметка отобразилась на страничке
    console.log("useEffect")
    document.title = counter.toString()
    return () => {
      console.log("зачистка")
      document.title = ""
    }
  }, [counter]) //вызов эффекта при каждом изменении зависимостей
  //если пустой [] - ровно идин раз при монтировании компоненты
  //ничего не передала - при каждом рендере компоненты

  return <>
    <div>Hello {counter}</div>
    <button onClick={() => setCounter(counter + 1)}>+</button>
  </>
}


export const SetTimeoutBase = () => {
  console.log("setTimeoutBase")

  const [count, setCount] = useState(1)

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
    console.log("setTimeout")
    return () => clearTimeout(timeoutId)
  }, [])

  return <>
    <div> Counter:  {count}</div>
  </>
}