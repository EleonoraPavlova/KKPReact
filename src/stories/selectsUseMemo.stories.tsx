import React, { useState } from "react";
import SelectComponent, { citiesType } from "../components/select/SelectComponent";
import { v1 } from "uuid";

export default {
  title: "Select",
  component: SelectComponent,
}


const cities: citiesType[] = [
  { id: v1(), city: "None", population: 502, region: 1 },
  { id: v1(), city: "Cambridge", population: 900, region: 1 },
  { id: v1(), city: "Oxford", population: 960, region: 2 },
  { id: v1(), city: "Liverpool", population: 660, region: 2 },
  { id: v1(), city: "St.Davids", population: 60, region: 2 },
  { id: v1(), city: "Manchester", population: 102, region: 3 },
  { id: v1(), city: "Oldham", population: 140, region: 3 },
  { id: v1(), city: "Worcester", population: 182, region: 3 }
]


export const SelectsMemo = () => {
  const [counter, setCounter] = useState(0)
  const [city, setCity] = useState<string>("")

  const onChangeHandlerCity = (value: string) => {
    setCity(city)
  }

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    {counter}
    <SelectComponent value={city} onChange={onChangeHandlerCity}
      cities={cities} />
    {/* <SelectComponent value={city} onChange={onChangeHandler}
      selectItems={cities} />
    <SelectComponent value={city} onChange={onChangeHandler}
      selectItems={cities} /> */}
  </>
}