import React, { useState } from 'react';
import Star from "../components/Star"


function UnControlledAccordionRate() {

  let [value, setValue] = useState<number | null>(null)
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
      return <Star key={number} selected={value && value > number ? true : false} callBack={() => { setValueHandler(number + 1) }} />
    })
  }

  return (
    <div className="star">{mappedStar()} </div>
  );
}

export default UnControlledAccordionRate;