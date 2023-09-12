
import React, { ChangeEvent, useState } from "react";
import SelectComponent from "./SelectComponent";


export default {
  title: "Select",
  component: SelectComponent,
}

export const SelectTest = () => {
  const [city, setCity] = useState<string>("2")
  // debugger
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setCity(e.currentTarget.value)
  }
  return <select value={city} onChange={onChangeHandler}>
    <option>None</option>
    <option value={"1"}>Lviv</option>
    <option value={"2"} >Kyiv</option>
    <option value={"3"}>Svalyava</option>
  </select>
}

{/* onClick = { setCity }
city = { city }
selectItems = { ["Manchester", "Cambridge", "Oxford", " Liverpool", "St. Davids"]} */}