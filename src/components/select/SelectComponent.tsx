import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export type SelectItemType = {
  title: string
  value: any
}

export type SelectPropsType = {
  value: string
  selectItems: SelectItemType[] | undefined
  setValue: (e: SelectChangeEvent) => void
}


function SelectComponent(props: SelectPropsType) {
  const mappedItem = () => {
    if (props.selectItems) {
      return props.selectItems.map((i, index) => <MenuItem key={index}> {i.title}  {i.value}</MenuItem >)
    }

  }

  const currentItem = () => {
    if (props.selectItems) {
      return props.selectItems.map((i, index) => i.value === props.value ?
        <MenuItem key={index}> {i.title}  {i.value}</MenuItem > :
        <MenuItem key={index}>Was not found</MenuItem >)
    }
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <Select>
        {currentItem()}
      </Select>
      <Select>
        {mappedItem()}
      </Select>

    </Box>
  );

}
export default SelectComponent;