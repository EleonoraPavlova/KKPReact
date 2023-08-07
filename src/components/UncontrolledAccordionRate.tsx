import React, { useState } from 'react';
import Star from "../components/Star"


function UnControlledAccordionRate() {

  let [value, setValue] = useState(0)
  let [isSelected, setIsSelected] = useState(false)

  const setValueHandler = () => {
    switch (value) {
      case (0): {
        setValue(1)
        return setIsSelected(!isSelected)
      }
      case (1): {
        setValue(2)
        return setIsSelected(!isSelected)
      }
      case (2): {
        setValue(3)
        return setIsSelected(!isSelected)
      }
      case (3): {
        setValue(4)
        return setIsSelected(!isSelected)
      }
      case (4): {
        setValue(5)
        return setIsSelected(!isSelected)
      }
      default: setIsSelected(!isSelected)
    }

  }

  return (
    <div>
      <Star selected={value > 0} callBack={setValueHandler} />
      <Star selected={value > 1} callBack={setValueHandler} />
      <Star selected={value > 2} callBack={setValueHandler} />
      <Star selected={value > 3} callBack={setValueHandler} />
      <Star selected={value > 4} callBack={setValueHandler} />
    </div>
  );
}

export default UnControlledAccordionRate;