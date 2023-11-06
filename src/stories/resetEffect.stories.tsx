import React, { useEffect, useState } from "react";

export default {
  title: "resetEffect",
}


export const ResetEffectBase = () => {
  console.log("ResetEffectBase")

  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log("Effect happened", count)

    return () => {//сброс useEffect - при размонтировании 
      //компоненты или ПЕРЕД очeредным вызовом useEffect(массив зависимостей)
      //при перевывозе компоненты сначала отработывает сброс, а потом уже сам useEffect
      //для чего это - чтобы не было утечки памяти
      console.log("reset effect", count)
    }
  }, [count])

  const increase = () => { setCount(count + 1) }

  return <>
    <div> Counter:  {count}</div>
    <button onClick={increase}> + </button>
  </>
}

//какие клавиши были нажаты в окне, не в компоненте, по всему окно
export const KeysTrackerBase = () => {
  console.log("KeysTrackerBase")

  const [text, setText] = useState("")

  useEffect(() => {
    console.log("Effect happened", text)

    const handler = (e: KeyboardEvent) => {
      console.log("KeyboardEvente", e.key)
      setText((prev) => prev + e.key)
    }

    window.addEventListener("keypress", handler)

    return () => {
      console.log("Зачистка")
      window.removeEventListener("keypress", handler)
    }
  }, [text]) //зачистка срабатывает на каждый тык

  return <>
    <div> type text:  {text}</div>
  </>
}

//* Pазмонтирование компоненты -  процесс происходит в том случае, когда компонента больше не нужна
// и должна быть убрана с экрана или при смене маршрута
//(например, при переключении между страницами в приложении).