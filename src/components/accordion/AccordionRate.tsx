import React from 'react';
import Star from "../Star"

export type rateProps = {
  value: number
  callBack?: (value: number) => void
  // value: 0 | 1 | 2 | 3 | 4 | 5  or so, what I'm waiting strict
}

function AccordionRate(props: rateProps) {
  console.log("AccordionRateMemo", props.value)

  // const callBackHandler = () => {
  //   props.callBack && props.callBack(props.value )
  // }

  return (
    <div>
      <Star selected={props.value > 0} callBack={() => props.callBack && props.callBack(1)} />
      <Star selected={props.value > 1} callBack={() => props.callBack && props.callBack(2)} />
      <Star selected={props.value > 2} callBack={() => props.callBack && props.callBack(3)} />
      <Star selected={props.value > 3} callBack={() => props.callBack && props.callBack(4)} />
      <Star selected={props.value > 4} callBack={() => props.callBack && props.callBack(5)} />
    </div>
  );
}

export default AccordionRate;