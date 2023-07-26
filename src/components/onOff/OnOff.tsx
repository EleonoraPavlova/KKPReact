
export type OnOffProps = {
  isSwitched: boolean | null;
  switchButton: (arg: boolean) => void;
}

export type switchType = "On" | "Off"

function OnOff(props: OnOffProps) {

  const getCircleClass = () => {
    if (props.isSwitched === null) {
      return ""
    }
    return props.isSwitched ? "green" : "red"
  }


  return (
    <div className="OnOff">
      <div>
        <button className={props.isSwitched ? "green" : ""} onClick={() => props.switchButton(true)}>On</button>
        <button className={props.isSwitched === false ? "red" : ""} onClick={() => props.switchButton(false)}>Off</button>
      </div>
      <div className={`circle ${getCircleClass()}`}></div>
    </div >
  );
}

export default OnOff;