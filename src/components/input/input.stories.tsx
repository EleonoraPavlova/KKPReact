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


export const ControlledInputWithFixidValue = () => < input value={"it.by"} />
