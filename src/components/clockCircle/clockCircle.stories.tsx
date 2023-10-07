import * as React from 'react';
import { ClockCircle } from "./clockCircle";


export default {
  title: "ClockCircle",
  component: ClockCircle
}

export const ClockCircleBase = () => {
  const [value, setValue] = React.useState(new Date());

  return (
    <ClockCircle value={value} setValue={setValue} />
  );
}