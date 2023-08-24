import "../../App.css"


export type OnOffProps = {
  isClick: boolean | null;
  setIsClick: (value: boolean) => void;
}

export type switchType = "On" | "Off"

export function OnOff(props: OnOffProps) {

  const getCircleClass = () => {
    if (props.isClick === null) {
      return ""
    }
    return props.isClick ? "green" : "red"
  }

  return (
    <div className="OnOff">
      <div>
        <button className={props.isClick ? "green" : ""} onClick={() => props.setIsClick(true)}>On</button>
        <button className={props.isClick === false ? "red" : ""} onClick={() => props.setIsClick(false)}>Off</button>
      </div>
      <div className={`circle ${getCircleClass()}`}></div>
    </div >
  );
}
