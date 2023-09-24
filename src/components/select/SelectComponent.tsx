import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';


export type selectLabel = "city" | "population" | "region"

export type SelectPropsType = {
  value: string
  label: string
  name: selectLabel
  items: React.ReactNode[] | undefined //принимает 2 вида массивов
  onChange: (e: SelectChangeEvent<string>) => void
}


function SelectComponent(props: SelectPropsType) {
  return (<>
    <FormControl variant={"outlined"} sx={{ m: 1, minWidth: 160 }}>
      <InputLabel id="demo-simple-select-autowidth-label">{props.label}</InputLabel>
      <Select
        name={props.name}
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-standard"
        value={props.value}
        onChange={props.onChange}
        label="demo-simple-select-autowidth"
      >
        {props.items}
      </Select>
    </FormControl>
    {(props.value !== "None" && props.value !== "All") && props.value &&
      <Box component="div" sx={{
        width: "150px",
        height: "31px",
        border: '1px dashed grey',
        borderRadius: "3px",
        padding: "10px",
        margin: " 0px 15px",
        textAlign: "center",
        fontSize: "23px"
      }}>{props.value}</Box >
    }
  </>
  );

}
export default SelectComponent;