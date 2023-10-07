import { useEffect } from "react";
import "../../App.css"


export type ClockCircleProps = {
  value: Date;
  setValue: (value: Date) => void;
}

export const ClockCircle: React.FC<ClockCircleProps> = ({ value, setValue }) => {

  useEffect(() => {
    console.log("useEffect")
    const timeoutId = setInterval(() => {
      setValue(new Date())
    }, 1000)
    return () => clearTimeout(timeoutId);
  }, []);

  const addedZero = (n: number) => {
    return n < 10 ? "0" + n.toString() : n
  }


  return (
    <div className="clock">
      <div className="time">
        <div className="hours"></div>
        <div className="min"></div>
        <div className="sec"></div>
      </div>
    </div >
  );
}
