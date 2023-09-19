import React, { useState } from 'react';
import Star from "../Star"


export type UnControlledAccordionRateType = {
  defaultValue: number
  onChange: (value: number) => void
}

const StarMemo = React.memo(Star)

function UnControlledAccordionRate(props: UnControlledAccordionRateType) {
  let [value, setValue] = useState<number | null>(props.defaultValue ? props.defaultValue : null)
  console.log(value)

  const setValueHandler = (number: number) => {
    if (number === value) {
      setValue(null)
    } else {
      setValue(number)
    }
  }

  const mappedStar = () => {
    return Array(5).fill(0).map((unused, index) => index + 1).map((number) => {
      return <StarMemo key={number} selected={value && value > number ? true : false} callBack={() => { setValueHandler(number + 1); props.onChange(number) }} />
    })
  }

  return (
    <div className="star">{mappedStar()} </div>
  );
}

export default UnControlledAccordionRate;