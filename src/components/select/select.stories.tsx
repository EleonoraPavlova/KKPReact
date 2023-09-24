
import React, { useState } from "react";
import SelectComponent from "./SelectComponent";
import { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { citiesType } from "../../stories/selectsUseMemo.stories";

export default {
  title: "Select",
  component: SelectComponent,
}


export type SelectItemType = {
  title: string
  value: string
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

  const onChangeHandler = (e: SelectChangeEvent<string>) => {
    setCity(e.target.value)
  }

  const itemsCity = cities.map((i, index) => <MenuItem key={index} value={i.title}> {i.title}  {i.value}</MenuItem >)


  return <>
    <SelectComponent value={city} onChange={onChangeHandler}
      name="city" label="city" items={itemsCity} />
  </>
}
