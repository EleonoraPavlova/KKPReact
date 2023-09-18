import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';


export type SelectItemType = {
  title: string
  value: string
}

export type SelectPropsType = {
  value: string
  selectItems: SelectItemType[]
  onChange: (e: string) => void
}


function SelectComponent(props: SelectPropsType) {
  const mappedItem = () => {
    if (props.selectItems) {
      return props.selectItems.map((i, index) => <MenuItem key={index} value={i.title}> {i.title}  {i.value}</MenuItem >)
    }
  }

  const onChangeHandler = (e: SelectChangeEvent<string>) => {
    props.onChange(e.target.value)
  }

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
    {props.value !== "None" && props.value &&
      <Box component="div" sx={{
        width: "150px",
        height: "50px",
        border: '1px dashed grey',
        padding: "10px",
        textAlign: "center",
        fontSize: "23px"
      }}>{props.value}</Box >
    }
  </>
  );

}
export default SelectComponent;