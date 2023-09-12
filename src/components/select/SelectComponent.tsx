import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from "@mui/material/Box";


export type SelectItemType = {
  title: string
  value: string
}

export type SelectPropsType = {
  value: string
  selectItems: SelectItemType[]
  onChange: (v: string) => void
}


function SelectComponent(props: SelectPropsType) {
  const mappedItem = () => {
    if (props.selectItems) {
      return props.selectItems.map((i, index) => <MenuItem key={index} value={index}> {i.title}  {i.value}</MenuItem >)
    }
  }

  const onChangeHandler = (e: SelectChangeEvent) => {
    props.onChange(e.target.value)
  }

  const currentCity = props.selectItems.filter((i) => i.value === props.value)


  return (<>
    <FormControl variant={"outlined"} sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="city">City</InputLabel>
      <Select
        labelId="city"
        id="demo-simple-select-standard"
        value={props.value}
        onChange={onChangeHandler}
        label="City"
      >
        {mappedItem()}
      </Select>
    </FormControl>
    {currentCity.length > 0 &&
      <Box>{currentCity[0].title}</Box>
    }
  </>
  );

}
export default SelectComponent;