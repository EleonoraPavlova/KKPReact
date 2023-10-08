import * as React from 'react';
import { ClockCircle } from "./clockCircle";
import { useEffect, useState } from "react";


export default {
  title: "ClockCircle",
  component: ClockCircle
}

export const ClockCircleBase = () => {
  const currentDate = new Date();
  let secondRatio = currentDate.getSeconds() / 60;
  let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  let hourRatio = (minuteRatio + currentDate.getHours()) / 12;

  const [second, setSecond] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);

  const setClock = () => {
    setSecond(secondRatio)
    setMinute(minuteRatio)
    setHour(hourRatio);
  }

  useEffect(() => {
    const timeId = setInterval(() => {
      setClock()
    }, 1000);
    return () => clearInterval(timeId)
  }, [setClock])

  return (
    <ClockCircle hour={hour} minute={minute} second={second} />
  );
}