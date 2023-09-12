
import React, { useState } from "react";
import SelectComponent from "./SelectComponent";

export default {
  title: "Select",
  component: SelectComponent,
}

const cities = [
  { title: "None", value: '' },
  { title: "Manchester", value: "1" },
  { title: "Cambridge", value: "2" },
  { title: "Oxford", value: "3" },
  { title: "Liverpool", value: "4" },
  { title: "St. Davids", value: "5" }
]


export const SelectTest = () => {
  const [city, setCity] = useState<string>("")
  const onChangeHandler = (v: string) => {
    setCity(v)
  }


  return <> <SelectComponent value={city} onChange={onChangeHandler}
    selectItems={cities}
  />
  </>
}
