import { useState } from "react";

export type OnOffProps = {
  isClickText: string;
  defaultValue?: boolean
}


function UnControlledOnOff(props: OnOffProps) {
  let [isClick, setIsClick] = useState(props.defaultValue ? props.defaultValue : false)

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
        {props.isClickText} {props.defaultValue}
        <button className={isClick === false ? "red" : ""} onClick={setIsClickHandler}>Off</button>
      </div>
      <div className={`circle ${getCircleClass()}`}></div>
    </div >
  );
}

export default UnControlledOnOff;