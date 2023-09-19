import React from "react"
import { useState } from "react"

export default {
  title: "React.memo demo"
}

export type UsersType = {
  users: string[]
}
type CounterType = {
  count: number
}

const Counter = (props: CounterType) => {
  return <div>{props.count}</div>
}


const UsersSecret = (props: UsersType) => {
  console.log("users")
  return <div>{props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
}

const Users = React.memo(UsersSecret) //не перезапускает перерендер, если не произошло изменений!

export const Example = () => {
  console.log("example")
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["Tamara", "Andre", "Maksim", "Katya"])

  const addUser = () => {
    setUsers([...users, "Sveta " + new Date().getFullYear()])
  }

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <Counter count={counter} />

    <button onClick={addUser}>Add user</button>
    <Users users={users} />
  </>
}