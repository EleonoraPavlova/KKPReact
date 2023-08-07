import React from 'react';
import Star from "../Star"

type rateProps = {
  value: number
  // value: 0 | 1 | 2 | 3 | 4 | 5  or so, what I'm waiting strict
}

function AccordionRate(props: rateProps) {

  return (
    <div>
      <Star selected={props.value > 0} />
      <Star selected={props.value > 1} />
      <Star selected={props.value > 2} />
      <Star selected={props.value > 3} />
      <Star selected={props.value > 4} />
    </div>
  );
}

export default AccordionRate;