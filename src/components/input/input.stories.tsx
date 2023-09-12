import { action } from "@storybook/addon-actions"
import { ChangeEvent, useRef, useState } from "react"

export default {
  title: "Input",
}

//виды input
export const UncontrolledInput = () => < input />

//с onChange event - выводим значение input рядом с окошком input
export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("")
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const actualValue = e.currentTarget.value
    setValue(actualValue)
  }
  return <>  < input onChange={onChangeHandler} /> - {value} </>
}


//вариант по типу getElementById
export const GetValueOfUncontrolledByButton = () => {
  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)// конкретное обращение 
  //напрямую к елементу

  const onClickSave = () => {
    const element = inputRef.current as HTMLInputElement; //as HTMLInputElement это надо писать потому что исходное значение null
    setValue(element.value)
  }

  return <> < input ref={inputRef} />
    < button onClick={onClickSave}> Save</ button> - actual value: {value}
  </>
}

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return < input value={parentValue} onChange={onChangeHandler} />
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }
  return <input type="checkbox" checked={parentValue} onChange={onChangeHandler} />
}


export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("2")
  // debugger
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChangeHandler}>
    <option>None</option>
    <option value={"1"}>Lviv</option>
    <option value={"2"} >Kyiv</option>
    <option value={"3"}>Svalyava</option>
  </select>
}

export const ControlledInputWithFixidValue = () => < input value={"it.by"} />
