import { useState } from "react";

// type OnOffProps = {
//   isClick: boolean | null;
//   setIsClick: (value: boolean) => void;
// }

// type switchType = "On" | "Off"

function UnControlledOnOff() {
  let [isClick, setIsClick] = useState<boolean | null>(null)

  const getCircleClass = () => {
    if (isClick === null) {
      return ""
    }
    return isClick ? "green" : "red"
  }

  const setIsClickHandler = () => {
    setIsClick(!isClick)
  }

  return (
    <div className="OnOff">
      <div>
        <button className={isClick ? "green" : ""} onClick={setIsClickHandler}>On</button>
        <button className={isClick === false ? "red" : ""} onClick={setIsClickHandler}>Off</button>
      </div>
      <div className={`circle ${getCircleClass()}`}></div>
    </div >
  );
}

export default UnControlledOnOff;