import React, { useMemo, useState } from "react";
import { UsersType } from "./reactMemo.stories";

export default {
  title: "useMemo",
}

//будем считать факториал без рекурсии
export const DifficultCounting = () => {
  console.log("DifficultCounting")
  let [a, setA] = useState<number>(0)
  let [b, setB] = useState<number>(0)

  let resultA = 1
  let resultB = 1


  //для сложных вычислений! КЭШИРУЕТ ЗНАЧЕНИЕ! берет значение этого вычисления из памяти, если оно не меняется!
  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++
        const fakeValue = Math.random()
      }
      tempResultA *= i //   resultA =  resultA * i

    }
    return tempResultA
  }, [a]) //[a] если не поменялось - просто вернуть содержимое useMemo


  for (let i = 1; i <= b; i++) {
    resultB *= i // 
  }

  return <>
    <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
    <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
    <hr />
    <div>
      Result for a: {resultA}
    </div>
    <div>
      Result for b: {resultB}
    </div>
  </>
}


const UsersSecret = (props: UsersType) => {
  console.log("UsersSecret")
  return <div>{props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
}

const Users = React.memo(UsersSecret) //не перезапускает перерендер,
// если не произошло изменений!

export const HelpsToReactMemo = () => {
  console.log("HelpsToReactMemo")

  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["Tamara", "Andre", "Maksim", "Katya", "Hermen"])

  const newArr = useMemo(() => { //функция сработает один раз и запомнит значение!
    //потом будет брать это значение из памяти, если оно не будет меняться!
    return users.filter(u => u.toLowerCase().includes("a"))
  }, [users])
  //[users] - обязательно! потому что фильтрация завичит от users!
  // без зависимости  отрисоввка массива не будет обновляться!


  const addUser = () => {
    setUsers([...users, "Sveta " + new Date().getFullYear()])
  }

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    {counter}
    <button onClick={addUser}>Add user</button>
    <Users users={newArr} />
  </>
}